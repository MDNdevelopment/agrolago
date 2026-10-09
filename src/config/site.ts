// Única fuente de verdad de los datos del negocio que no cambian con el idioma.
// Los textos traducibles viven en src/i18n/{es,en,zh}.ts.
export const site = {
  name: 'Agrolago',
  legalName: 'Agrolago de Occidente, C.A.',
  url: 'https://agrolago.com',
  rif: 'J-31063206-5',
  foundingYear: 2011,
  phone: '+58 261 741 9653',
  phoneHref: '+582617419653',
  email: 'ventas@agrolago.com',
  address: {
    street: 'Calle 62 con Avenida 8, Centro Empresarial Romy, Nivel Local 04',
    city: 'Maracaibo',
    region: 'Zulia',
    country: 'VE',
  },
  mapEmbed: 'https://www.google.com/maps?q=Centro+Empresarial+Romy,+Maracaibo,+Zulia&z=16&output=embed',
  // Redes sociales: dejar vacío lo que no exista. Solo se muestran las que tengan URL.
  social: { facebook: '', instagram: '', youtube: '' } as Record<'facebook' | 'instagram' | 'youtube', string>,
  // Crédito de MDN en el footer. Poner en false para proyectos personales.
  credit: true,
} as const;
