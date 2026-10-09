// Envío del formulario de cotización a Netlify Forms sin recargar la página.
// Sin JS, el <form> hace POST nativo a /gracias y Netlify lo registra igualmente.

export {};
function bind() {
  document.querySelectorAll<HTMLFormElement>('form[data-quote-form]').forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    const status = form.querySelector<HTMLElement>('[data-status]');
    const button = form.querySelector<HTMLButtonElement>('[data-submit]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const label = button?.textContent ?? '';
      if (button) {
        button.disabled = true;
        button.textContent = form.dataset.sending ?? '…';
      }
      if (status) status.textContent = '';
      try {
        const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
        const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        if (status) status.textContent = form.dataset.ok ?? '';
        status?.classList.remove('is-error');
      } catch {
        if (status) {
          status.textContent = form.dataset.fail ?? '';
          status.classList.add('is-error');
        }
      } finally {
        if (button) {
          button.disabled = false;
          button.textContent = label;
        }
      }
    });
  });
}
document.addEventListener('astro:page-load', bind);
