// Emprendimientos confirmados para Territorio Emprende — fuente única para
// Emprendedores.astro (muro de logos, antes de la sección de registro).
//
// `name` se pinta como caption debajo de cada logo y además es el `alt` de la
// <Image> (a11y / SEO). Los nombres se transcribieron de los propios logos que
// mandó IMJUVE (el de "Sinergia 3D" — la "S" suelta — lo pasaron aparte); si
// más adelante llega una lista oficial, ajustar aquí.
//
// `logo`: se importan como módulo (no por string/path) para que Astro los
// procese con `astro:assets` — <Image> en Emprendedores.astro genera el
// tamaño/formato real que necesita cada celda de la grilla en vez de servir el
// archivo fuente completo (varios pasan de 100KB). Mismo criterio que las
// fotos de banda en src/data/lineup.ts.
import type { ImageMetadata } from 'astro';
import antonella from '../assets/emprendedores/antonella.webp';
import casaPeluditos from '../assets/emprendedores/casa-peluditos.webp';
import coffeeMilk from '../assets/emprendedores/coffee-milk.webp';
import fredhyloramas from '../assets/emprendedores/fredhyloramas.webp';
import jiloprint3d from '../assets/emprendedores/jiloprint-3d.webp';
import lasBotachelas from '../assets/emprendedores/las-botachelas-and-drinks.webp';
import michedrinks from '../assets/emprendedores/michedrinks.webp';
import octliXilotl from '../assets/emprendedores/octli-xilotl.webp';
import ropaAguilar from '../assets/emprendedores/ropa-aguilar.webp';
import sinergia3d from '../assets/emprendedores/sinergia-3d.webp';

export interface Emprendedor {
	name: string;
	logo: ImageMetadata;
}

export const emprendedores: Emprendedor[] = [
	{ name: 'Antonella', logo: antonella },
	{ name: 'Casa Peluditos', logo: casaPeluditos },
	{ name: 'Coffee Milk', logo: coffeeMilk },
	{ name: 'Fredhyloramas', logo: fredhyloramas },
	{ name: 'JiloPrint 3D', logo: jiloprint3d },
	{ name: 'Las Botachelas', logo: lasBotachelas },
	{ name: 'MicheDrinks', logo: michedrinks },
	{ name: 'Octli Xilotl', logo: octliXilotl },
	{ name: 'Ropa Aguilar', logo: ropaAguilar },
	{ name: 'Sinergia 3D', logo: sinergia3d },
];
