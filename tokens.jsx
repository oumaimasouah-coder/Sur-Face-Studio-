// Surface Studio — Design tokens
const T = {
  encre:    '#1C1C1A',
  encreS:   '#2A2A26',  // softer ink
  chaux:    '#F4F0E8',
  chauxP:   '#EBE5D8',
  sable:    '#DCD2BD',
  ocre:     '#C9A96E',
  pierre:   '#A39E92',
  pierreL:  '#C8C2B5',
  // Accents vifs ajoutés
  vermillon:'#E8553A',  // CTA principal, highlights
  cobalt:   '#2B4DD9',  // accent secondaire (rare)
  safran:   '#F2B73E',  // accent chaleur (rare)
};

const SERIF = '"Fraunces", Georgia, serif';
const SANS  = '"Inter", system-ui, -apple-system, sans-serif';
const MONO  = '"JetBrains Mono", monospace';

Object.assign(window, { T, SERIF, SANS, MONO });
