import type { ImageMetadata } from 'astro';

import larvicultura from '../assets/proceso/01-larvicultura.jpg';
import cultivo from '../assets/proceso/02-cultivo.jpg';
import cosecha from '../assets/proceso/03-cosecha.jpg';
import recepcion from '../assets/proceso/04-recepcion.jpg';
import seleccion from '../assets/proceso/05-seleccion.jpg';
import clasificacion from '../assets/proceso/06-clasificacion.jpg';
import valorAgregado from '../assets/proceso/07-valor-agregado.jpg';
import estuches from '../assets/proceso/08-estuches.jpg';
import congelamiento from '../assets/proceso/09-congelamiento.jpg';
import master from '../assets/proceso/10-master.jpg';
import almacenamiento from '../assets/proceso/11-almacenamiento.jpg';
import exportacion from '../assets/proceso/12-exportacion.jpg';

import cultivos from '../assets/campo/cultivos.jpg';
import produccion from '../assets/campo/produccion.jpg';

import calidad from '../assets/valores/calidad.jpg';
import etica from '../assets/valores/etica.jpg';
import respeto from '../assets/valores/respeto.jpg';
import compromiso from '../assets/valores/compromiso.jpg';

import certHaccp from '../assets/cert/haccp.jpg';
import certAsc from '../assets/cert/asc.jpg';
import certFda from '../assets/cert/fda-bta.jpg';
import certSanitario from '../assets/cert/permiso-sanitario.jpg';

import logoColor from '../assets/logo/logo-color.png';
import logoBlanco from '../assets/logo/logo-blanco.png';

/** Las 12 etapas del proceso, en orden. */
export const procesoFotos: ImageMetadata[] = [
  larvicultura,
  cultivo,
  cosecha,
  recepcion,
  seleccion,
  clasificacion,
  valorAgregado,
  estuches,
  congelamiento,
  master,
  almacenamiento,
  exportacion,
];

export const fotos = {
  cultivos,
  produccion,
  cultivo,
  cosecha,
  recepcion,
  seleccion,
  clasificacion,
  valorAgregado,
  estuches,
  congelamiento,
  master,
  almacenamiento,
  exportacion,
  calidad,
  respeto,
};

export const valoresFotos: ImageMetadata[] = [calidad, etica, respeto, compromiso];

/** Documentos: miniatura + archivo completo. Orden = i18n procesos.docs */
export const certificados: ImageMetadata[] = [certHaccp, certAsc, certFda, certSanitario];

export const logos = { color: logoColor, blanco: logoBlanco };
