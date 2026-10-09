// Menú móvil con overlay circular. Se re-enlaza en cada navegación (ClientRouter reemplaza el <body>).

export {};
let open = false;
let ctl: AbortController | null = null;

function bind() {
  ctl?.abort();
  ctl = new AbortController();
  const { signal } = ctl;
  open = false;
  document.documentElement.style.overflow = '';

  const burger = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  const nav = document.querySelector<HTMLElement>('[data-nav]');

  if (nav) {
    const onScroll = () => nav.classList.toggle('is-solid', scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true, signal });
  }
  if (!burger || !menu) return;

  const links = () => Array.from(menu.querySelectorAll<HTMLElement>('a, button'));

  const setOpen = async (next: boolean) => {
    if (next === open) return;
    open = next;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', (open ? burger.dataset.labelClose : burger.dataset.labelOpen) ?? '');
    document.documentElement.style.overflow = open ? 'hidden' : '';

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.hidden = !open;
      menu.classList.toggle('is-open', open);
      if (open) links()[0]?.focus();
      return;
    }
    const { gsap } = await import('gsap');
    const at = 'at calc(100% - 2.5rem) 2.4rem';
    const items = menu.querySelectorAll('[data-menu-link] a');
    gsap.killTweensOf([menu, items]);
    if (open) {
      menu.hidden = false;
      gsap.fromTo(menu, { clipPath: `circle(0% ${at})` }, { clipPath: `circle(150% ${at})`, duration: 0.9, ease: 'expo.inOut' });
      gsap.fromTo(items, { yPercent: 130, rotate: 8 }, { yPercent: 0, rotate: 0, duration: 1, stagger: 0.06, delay: 0.3, ease: 'expo.out' });
      links()[0]?.focus();
    } else {
      gsap.to(menu, {
        clipPath: `circle(0% ${at})`, duration: 0.6, ease: 'expo.inOut',
        onComplete: () => { menu.hidden = true; gsap.set(menu, { clearProps: 'clipPath' }); },
      });
      burger.focus();
    }
  };

  burger.addEventListener('click', () => setOpen(!open), { signal });
  menu.addEventListener('click', (e) => { if ((e.target as HTMLElement).closest('a')) setOpen(false); }, { signal });
  addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') return void setOpen(false);
    if (e.key !== 'Tab') return;
    const f = [burger, ...links()];
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, { signal });
  matchMedia('(min-width: 901px)').addEventListener('change', (e) => e.matches && open && setOpen(false), { signal });
}

document.addEventListener('astro:page-load', bind);
