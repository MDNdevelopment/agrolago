// Carga perezosa de GSAP con ClientRouter. Sin GSAP (reduced-motion) la web navega igual, sin cortina.
import './menu.ts';
import './quote-form.ts';

type Motion = typeof import('./motion.ts');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let motion: Promise<Motion> | null = null;
let mod: Motion | null = null;
const load = () => (motion ??= import('./motion.ts').then((m) => (mod = m)));

function whenIdle(cb: () => void) {
  'requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 2000 }) : setTimeout(cb, 200);
}

// Con reduced-motion no hay GSAP: los paneles del hero se cambian por clase, sin animación
function staticPanels() {
  const root = document.querySelector<HTMLElement>('[data-panels]');
  if (!root) return;
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-panel]'));
  panels.forEach((p, i) =>
    p.querySelector('[data-panel-tab]')?.addEventListener('click', () =>
      panels.forEach((q, n) => {
        q.classList.toggle('is-active', n === i);
        q.querySelector('[data-panel-tab]')?.setAttribute('aria-expanded', String(n === i));
        q.querySelector('[data-panel-body]')?.toggleAttribute('inert', n !== i);
      }),
    ),
  );
}

// Cada página (primera carga y navegaciones): re-inicializar
let started = false;
document.addEventListener('astro:page-load', () => {
  if (reduced.matches) return staticPanels();
  started = false;
  const start = () => {
    if (started) return;
    started = true;
    load().then((m) => { m.init(); m.curtainOut(); });
  };
  // Si la página abre con animación (hero), GSAP entra de inmediato; si no, en reposo o al primer gesto.
  if (document.querySelector('[data-hero-root], [data-carousel], [data-split][data-hero]')) start();
  else {
    whenIdle(start);
    addEventListener('scroll', start, { once: true, passive: true });
    addEventListener('pointerdown', start, { once: true });
  }
});

// Antes de cambiar de página: cortina que cubre. Debajo se hace el swap.
document.addEventListener('astro:before-preparation', (e) => {
  if (reduced.matches || !mod) return;
  const ev = e as Event & { loader: () => Promise<void> };
  const original = ev.loader;
  ev.loader = async () => {
    await Promise.all([mod!.curtainIn(), original()]);
  };
});

// La página que entra arranca pre-oculta (igual que en la carga inicial) para que el hero no parpadee
document.addEventListener('astro:before-swap', (e) => {
  if (!reduced.matches) (e as Event & { newDocument: Document }).newDocument.documentElement.classList.add('has-motion');
});

// Limpiar triggers y tweens de la página que se va
document.addEventListener('astro:before-swap', () => {
  mod?.revert();
  started = false;
});
