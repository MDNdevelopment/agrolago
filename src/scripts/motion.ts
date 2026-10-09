import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// ------------------------------------------------------------------
// Utilidades
// ------------------------------------------------------------------

/** fromTo que limpia los estilos inline al terminar (evita transforms pegados). */
export function ft(targets: gsap.TweenTarget, from: gsap.TweenVars, to: gsap.TweenVars) {
  if (to.scrollTrigger) {
    const done = to.onComplete;
    to.onComplete = function (this: gsap.core.Tween, ...a: unknown[]) {
      gsap.set(this.targets(), { clearProps: 'clipPath,opacity,transform' });
      (done as ((...x: unknown[]) => void) | undefined)?.apply(this, a);
    };
  }
  return gsap.fromTo(targets, from, to);
}

const $$ = <T extends HTMLElement = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));

/**
 * Divide en palabras con máscara que no corta ascendentes/descendentes.
 * Conserva el marcado interno (<em>, <span>…). Memoiza en el elemento.
 */
type Splittable = HTMLElement & { __words?: HTMLElement[] };

/** El chino no lleva espacios: se parte por carácter (con su puntuación pegada) para que el titular pueda saltar de línea. */
const CJK = /[\u3400-\u9fff\uf900-\ufaff]/;
const CJK_TOKEN = /[\u3400-\u9fff\uf900-\ufaff][，。、！？；：）」』”’]*|[^\u3400-\u9fff\uf900-\ufaff]+/g;
const cjkTokens = (p: string): string[] => (CJK.test(p) ? (p.match(CJK_TOKEN) ?? [p]) : [p]);
export function splitWords(el: Splittable): HTMLElement[] {
  if (el.__words) return el.__words;
  const words: HTMLElement[] = [];
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const parts = (child.textContent ?? '').split(/(\s+)/).flatMap(cjkTokens);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) return void frag.appendChild(document.createTextNode(' '));
          const outer = document.createElement('span');
          outer.style.cssText =
            'display:inline-block;overflow:hidden;vertical-align:bottom;padding:.28em .03em .12em;margin:-.28em -.03em -.12em';
          const inner = document.createElement('span');
          inner.style.cssText = 'display:inline-block;will-change:transform';
          inner.textContent = p;
          outer.appendChild(inner);
          frag.appendChild(outer);
          words.push(inner);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && (child as HTMLElement).tagName !== 'BR') {
        walk(child);
      }
    });
  };
  el.setAttribute('aria-label', el.textContent?.trim() ?? '');
  walk(el);
  words.forEach((w) => w.parentElement?.setAttribute('aria-hidden', 'true'));
  el.__words = words;
  return words;
}

const once = (el: Element, start = 'top 88%') => ({ trigger: el, start, once: true });

// ------------------------------------------------------------------
// Motor declarativo: se anima con atributos data-*
// ------------------------------------------------------------------

function declarative() {
  // Titulares: palabras suben con rotación
  $$('[data-split]').forEach((el) => {
    const words = splitWords(el);
    const hero = el.hasAttribute('data-hero');
    ft(words, { yPercent: 120, rotate: 7 }, {
      yPercent: 0,
      rotate: 0,
      duration: 1.05,
      ease: 'expo.out',
      stagger: CJK.test(el.textContent ?? '') ? 0.02 : 0.035,
      ...(hero ? { delay: 0.15 } : { scrollTrigger: once(el) }),
    });
  });

  // Citas y párrafos: por líneas
  $$('[data-lines]').forEach((el) => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      autoSplit: true,
      onSplit: (self) =>
        ft(self.lines, { yPercent: 105 }, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.09, scrollTrigger: once(el) }),
    });
  });

  // Fade + subida (usar con medida: no en todo)
  $$('[data-fade]').forEach((el) => {
    const delay = Number(el.dataset.fadeDelay ?? 0) / 1000;
    ft(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay, scrollTrigger: once(el, 'top 92%') });
  });

  // Grupos que entran en tandas
  const batch = $$('[data-batch]');
  if (batch.length) {
    gsap.set(batch, { opacity: 0, y: 28 });
    ScrollTrigger.batch(batch, {
      start: 'top 88%',
      once: true,
      onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.09, clearProps: 'opacity,transform' }),
    });
  }

  // Hijos que se abren como página (rotateX)
  $$('[data-flip]').forEach((el) =>
    ft(el.children, { rotateX: -85, y: 80, transformOrigin: '50% 0%' }, {
      rotateX: 0, y: 0, duration: 1, ease: 'expo.out', stagger: 0.12, scrollTrigger: once(el, 'top 85%'),
    }),
  );

  // Hijos que entran deslizados
  $$('[data-skew]').forEach((el) =>
    ft(el.children, { x: 180, skewX: -18, opacity: 0 }, {
      x: 0, skewX: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.1, scrollTrigger: once(el, 'top 85%'),
    }),
  );

  // Hijos que se revelan como persiana
  $$('[data-shutter]').forEach((el) =>
    ft(el.children, { clipPath: 'inset(100% 0 0 0)', y: 60 }, {
      clipPath: 'inset(0% 0 0 0)', y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.1, scrollTrigger: once(el),
    }),
  );

  // Imagen que se abre con clip-path + zoom interno, ligada al scroll. Termina con el elemento aún en pantalla.
  $$('[data-wipe]').forEach((el) => {
    const inner = el.querySelector<HTMLElement>('img, video, [data-wipe-inner]');
    const st = { trigger: el, start: 'clamp(top 95%)', end: 'clamp(top 30%)', scrub: 0.3 };
    gsap.fromTo(el, { clipPath: 'inset(22% 22% 22% 22% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', ease: 'none', scrollTrigger: st });
    if (inner) gsap.fromTo(inner, { scale: 1.5 }, { scale: 1, ease: 'none', scrollTrigger: { ...st } });
  });

  // Frase gigante que se ilumina palabra a palabra
  $$('[data-scrub]').forEach((el) => {
    const floor = Number(el.dataset.scrubFloor ?? 0.14);
    const cjk = CJK.test(el.textContent ?? '');
    SplitText.create(el, {
      type: cjk ? 'chars' : 'words',
      tag: 'span',
      wordsClass: 'scrub-word',
      charsClass: 'scrub-word',
      onSplit: (self) =>
        gsap.fromTo(cjk ? self.chars : self.words, { opacity: floor }, {
          opacity: 1, ease: 'none', stagger: cjk ? 0.08 : 0.25,
          scrollTrigger: { trigger: el, start: 'clamp(top 88%)', end: 'clamp(bottom 62%)', scrub: true },
        }),
    });
  });

  // Contadores
  $$('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix ?? '';
    const o = { v: 0 };
    gsap.to(o, {
      v: target, duration: 1.8, ease: 'power3.out',
      scrollTrigger: once(el, 'top 90%'),
      onUpdate: () => (el.textContent = Math.round(o.v).toLocaleString(document.documentElement.lang || 'es') + suffix),
    });
  });

  // Parallax suave
  $$('[data-parallax]').forEach((el) => {
    const k = Number(el.dataset.parallax || 0.15);
    gsap.fromTo(el, { yPercent: -k * 100 }, {
      yPercent: k * 100, ease: 'none',
      scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // Rail de progreso
  $$('[data-rail]').forEach((fill) => {
    const host = fill.closest<HTMLElement>('[data-rail-host]') ?? fill.parentElement!;
    gsap.fromTo(fill, { scaleY: 0 }, {
      scaleY: 1, ease: 'none', transformOrigin: 'top center',
      scrollTrigger: { trigger: host, start: 'top 70%', end: 'bottom 70%', scrub: 0.4 },
    });
  });
}

// ------------------------------------------------------------------
// Recetas con nombre
// ------------------------------------------------------------------

/** Intro del hero de página: el velo de color se retira, la foto se asienta y el texto sube. Sin parpadeo: el CSS lo pre-oculta (has-motion). */
function heroIntro() {
  const hero = document.querySelector<HTMLElement>('.page-hero[data-hero-root]');
  if (!hero) return;
  const veil = hero.querySelector<HTMLElement>('[data-hero-veil]');
  const img = hero.querySelector<HTMLElement>('[data-hero-media] img');
  const rest = $$('[data-hero-rest]', hero);
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (veil) tl.fromTo(veil, { opacity: 1 }, { opacity: 0, duration: 1.1, ease: 'power2.out' }, 0);
  if (img) tl.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 2.2 }, 0);
  if (rest.length) tl.fromTo(rest, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, clearProps: 'opacity,transform' }, 0.55);
}

/** Frame sticky con crossfade: cada paso de texto activa una imagen. El crossfade lo hace CSS. */
function stickySteps() {
  $$('[data-steps]').forEach((root) => {
    const steps = $$('[data-step]', root);
    const shots = $$('[data-shot]', root);
    const set = (i: number) => {
      shots.forEach((s, n) => s.classList.toggle('is-active', n === i));
      steps.forEach((s, n) => s.classList.toggle('is-active', n === i));
    };
    steps.forEach((step, i) =>
      ScrollTrigger.create({
        trigger: step, start: 'top 55%', end: 'bottom 55%',
        onEnter: () => set(i), onEnterBack: () => set(i),
      }),
    );
    set(0);
  });
}

/** Acordeón <details> con altura animada. */
function accordion() {
  $$('details[data-faq]').forEach((item) => {
    const answer = item.querySelector<HTMLElement>('.faq-answer');
    const summary = item.querySelector('summary');
    if (!answer || !summary) return;
    const close = (it: HTMLElement) => {
      const a = it.querySelector<HTMLElement>('.faq-answer');
      gsap.to(a, { height: 0, opacity: 0, duration: 0.35, ease: 'power2.inOut', onComplete: () => it.removeAttribute('open') });
    };
    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (item.hasAttribute('open')) return close(item);
      $$('details[data-faq][open]').forEach((o) => o !== item && close(o));
      item.setAttribute('open', '');
      gsap.fromTo(answer, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'height' });
    });
  });
}

/**
 * Caja de CTA: una sola línea de tiempo (caja, palabras del titular, resto), disparada por la caja.
 * Los hijos NO llevan su propio ScrollTrigger: dentro de una caja transformada se disparaban tarde.
 */
function boxMorph(shape: boolean) {
  $$('[data-box]').forEach((box) => {
    const radius = getComputedStyle(box).borderRadius;
    const words = $$('[data-box-words]', box).flatMap((h) => splitWords(h));
    const items = $$('[data-box-item]', box);
    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      scrollTrigger: once(box, 'top 88%'),
      onComplete: () => gsap.set([box, ...items, ...words], { clearProps: 'clipPath,opacity,transform,borderRadius' }),
    });
    if (shape) tl.fromTo(box, { scale: 0.9, y: 70, borderRadius: '100px' }, { scale: 1, y: 0, borderRadius: radius, duration: 0.9 }, 0);
    tl.fromTo(words, { yPercent: 120, rotate: 7 }, { yPercent: 0, rotate: 0, duration: 0.9, stagger: 0.035 }, 0.15);
    tl.fromTo(items, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 0.45);
  });
}

/**
 * Hero de paneles: tres franjas verticales, la activa se expande. Autoplay con línea de progreso, clic en la franja,
 * flechas de teclado, pausa solo con foco de teclado (el cursor no la detiene). Excepción documentada: se anima flex-grow (3 elementos, texto de ancho fijo).
 */
function chainPanels(): (() => void) | void {
  const root = document.querySelector<HTMLElement>('[data-panels]');
  if (!root) return;
  const panels = $$('[data-panel]', root);
  if (panels.length < 2) return;
  const tabs = panels.map((p) => p.querySelector<HTMLButtonElement>('[data-panel-tab]')!);
  const bodies = panels.map((p) => p.querySelector<HTMLElement>('[data-panel-body]')!);
  const dims = panels.map((p) => p.querySelector<HTMLElement>('[data-panel-dim]')!);
  const bars = panels.map((p) => p.querySelector<HTMLElement>('[data-panel-bar]')!);
  const labels = panels.map((p) => p.querySelector<HTMLElement>('.panel-label')!);
  const veil = root.querySelector<HTMLElement>('.panels-veil');
  const wide = matchMedia('(min-width: 901px)');
  const DUR = 7;
  const DIM = 0.55;
  let current = 0;
  let busy = false;
  let paused = false;
  let bar: gsap.core.Tween | null = null;
  const grow = () => (wide.matches ? 3 : 6);

  const parts = (i: number) => ({
    words: splitWords(panels[i].querySelector<HTMLElement>('[data-panel-title]')!),
    rest: $$('[data-panel-rest]', panels[i]),
    img: panels[i].querySelector<HTMLElement>('[data-panel-media] img'),
  });

  const apply = (i: number) =>
    panels.forEach((p, n) => {
      p.classList.toggle('is-active', n === i);
      tabs[n].setAttribute('aria-expanded', String(n === i));
      bodies[n].toggleAttribute('inert', n !== i);
    });

  const play = () => {
    bar?.kill();
    bars.forEach((b) => gsap.set(b, { scaleX: 0 }));
    bar = gsap.fromTo(bars[current], { scaleX: 0 }, { scaleX: 1, duration: DUR, ease: 'none', onComplete: () => go(current + 1) });
    if (paused) bar.pause();
  };

  const go = (to: number) => {
    const next = ((to % panels.length) + panels.length) % panels.length;
    if (busy || next === current) return;
    busy = true;
    bar?.kill();
    const out = current;
    const p = parts(next);
    gsap.timeline({ onComplete: () => { busy = false; current = next; play(); } })
      .to(bodies[out], { opacity: 0, duration: 0.35, ease: 'power2.in' }, 0)
      .to(labels[next], { opacity: 0, duration: 0.3 }, 0)
      .to(panels[out], { flexGrow: 1, duration: 1.1, ease: 'expo.inOut' }, 0)
      .to(panels[next], { flexGrow: grow(), duration: 1.1, ease: 'expo.inOut' }, 0)
      .to(dims[out], { opacity: DIM, duration: 0.8 }, 0)
      .to(dims[next], { opacity: 0, duration: 0.8 }, 0)
      .fromTo(p.img, { scale: 1.15 }, { scale: 1, duration: 1.6, ease: 'expo.out' }, 0.1)
      .add(() => {
        apply(next);
        gsap.set(bodies[next], { opacity: 1 });
        gsap.set(p.words, { yPercent: 130, rotate: 8 });
        gsap.set(p.rest, { opacity: 0 });
      }, 0.4)
      .to(labels[out], { opacity: 1, duration: 0.5 }, 0.6)
      .fromTo(p.words, { yPercent: 130, rotate: 8 }, { yPercent: 0, rotate: 0, duration: 1, stagger: CJK.test(panels[next].textContent ?? '') ? 0.025 : 0.05, ease: 'expo.out' }, 0.55)
      .fromTo(p.rest, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out', clearProps: 'opacity,transform' }, 0.8);
  };

  // Estado inicial por JS (el CSS ya lo trae por clase; esto lo hace consistente al cruzar el breakpoint)
  const settle = () => {
    gsap.set(panels, { flexGrow: (n: number) => (n === current ? grow() : 1) });
    gsap.set(dims, { opacity: (n: number) => (n === current ? 0 : DIM) });
  };
  settle();

  // Entrada: el velo se retira, la foto se asienta y el texto sube
  const p0 = parts(0);
  const intro = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: play });
  if (veil) intro.fromTo(veil, { opacity: 1 }, { opacity: 0, duration: 1.1, ease: 'power2.out' }, 0);
  intro.fromTo(p0.img, { scale: 1.2 }, { scale: 1, duration: 2.2 }, 0);
  intro.fromTo(p0.words, { yPercent: 130, rotate: 8 }, { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.05 }, 0.25);
  intro.fromTo(p0.rest, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, clearProps: 'opacity,transform' }, 0.7);
  intro.fromTo(labels.slice(1), { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.8);

  const ctl = new AbortController();
  const { signal } = ctl;
  // Solo el foco de teclado la pausa: un clic también deja foco en la franja y no debe frenarla
  const pause = (e: FocusEvent) => {
    if (!(e.target as HTMLElement).matches(':focus-visible')) return;
    paused = true;
    bar?.pause();
  };
  const resume = () => { paused = false; if (!busy) bar?.resume(); };
  root.addEventListener('focusin', pause, { signal });
  root.addEventListener('focusout', resume, { signal });
  tabs.forEach((t, n) => t.addEventListener('click', () => go(n), { signal }));
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(current + 1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(current - 1);
  }, { signal });
  wide.addEventListener('change', settle, { signal });

  return () => {
    ctl.abort();
    bar?.kill();
    intro.kill();
    gsap.set([...panels, ...dims, ...bodies, ...labels], { clearProps: 'flexGrow,opacity' });
  };
}

/** Tarjetas apiladas: al cubrirla la siguiente, la anterior se encoge y se oscurece. Termina con la siguiente ya pegada. */
function stackCards() {
  $$('[data-stack]').forEach((root) => {
    const cards = $$('[data-stack-card]', root);
    cards.slice(0, -1).forEach((card, i) => {
      const next = cards[i + 1];
      const inner = card.querySelector<HTMLElement>('[data-stack-inner]');
      const dim = card.querySelector<HTMLElement>('[data-stack-dim]');
      const st = { trigger: next, start: 'top 85%', end: 'top 24%', scrub: true };
      if (inner) gsap.fromTo(inner, { scale: 1 }, { scale: 0.94, ease: 'none', scrollTrigger: st });
      if (dim) gsap.fromTo(dim, { opacity: 0 }, { opacity: 0.55, ease: 'none', scrollTrigger: { ...st } });
    });
  });
}

/** Ruta: la línea se dibuja con el scroll (termina con la lista a media pantalla) y cada nodo salta al llegar. */
function routeDraw(horizontal: boolean) {
  $$('[data-route]').forEach((root) => {
    const fill = root.querySelector<HTMLElement>('[data-route-fill]');
    const list = root.querySelector<HTMLElement>('.route-list, .lot-stops');
    if (fill && list) {
      gsap.fromTo(fill, horizontal ? { scaleX: 0 } : { scaleY: 0 }, {
        ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }), ease: 'none',
        scrollTrigger: { trigger: list, start: 'top 72%', end: 'bottom 62%', scrub: 0.4 },
      });
    }
    $$('[data-route-node]', root).forEach((node, i) => {
      const dot = node.querySelector<HTMLElement>('[data-route-dot]');
      const text = node.querySelector<HTMLElement>('[data-route-text]');
      const delay = horizontal ? i * 0.12 : 0;
      const st = once(node, 'top 85%');
      if (dot) ft(dot, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.6)', delay, scrollTrigger: st });
      if (text) ft(text, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: delay + 0.12, scrollTrigger: st });
    });
  });
}

// ------------------------------------------------------------------
// Transición de página: cortina que cubre y destapa (se usa desde boot.ts)
// ------------------------------------------------------------------

let covered = false;

export function curtainIn(): Promise<void> {
  const c = document.querySelector<HTMLElement>('[data-page-curtain]');
  if (!c) return Promise.resolve();
  covered = true;
  return new Promise((res) => {
    gsap.fromTo(c, { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.6, ease: 'expo.inOut', onComplete: res });
  });
}

export function curtainOut() {
  const c = document.querySelector<HTMLElement>('[data-page-curtain]');
  if (!c || !covered) return;
  covered = false;
  gsap.fromTo(c, { clipPath: 'inset(0% 0 0 0)' }, {
    clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'expo.inOut',
    onComplete: () => gsap.set(c, { clipPath: 'inset(100% 0 0 0)' }),
  });
}

// ------------------------------------------------------------------
// Entrada
// ------------------------------------------------------------------

let mm: gsap.MatchMedia | null = null;

export function init() {
  revert();
  mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const cleanups: (() => void)[] = [];
    const keep = (fn: (() => void) | void) => fn && cleanups.push(fn);
    heroIntro();
    keep(chainPanels());
    declarative();
    stickySteps();
    accordion();
    const inner = gsap.matchMedia();
    inner.add('(min-width: 901px)', () => {
      boxMorph(true);
      routeDraw(true);
      stackCards();
    });
    inner.add('(max-width: 900px)', () => {
      boxMorph(false);
      routeDraw(false);
    });
    // Los estados iniciales ya están aplicados: se retira el pre-ocultado del CSS en el mismo bloque síncrono
    document.documentElement.classList.remove('has-motion');
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => {
      inner.revert();
      cleanups.forEach((fn) => fn());
    };
  });
}

export function revert() {
  mm?.revert();
  mm = null;
}
