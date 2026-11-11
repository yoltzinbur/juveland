// `name` se muestra debajo del logo y también es su `alt`.
// Los logos se importan como módulo para que astro:assets los optimice.
import type { ImageMetadata } from 'astro';
import antonella from '../assets/emprendedores/antonella.webp';
import casaPeluditos from '../assets/emprendedores/casa-peluditos.webp';
import coffeeMilk from '../assets/emprendedores/coffee-milk.webp';
import fredhyloramas from '../assets/emprendedores/fredhyloramas.webp';
import jiloprint3d from '../assets/emprendedores/jiloprint-3d.webp';
import jiloteTaller from '../assets/emprendedores/jilote-taller.webp';
import lasBotachelas from '../assets/emprendedores/las-botachelas-and-drinks.webp';
import llyreenSnacks from '../assets/emprendedores/llyreen-snacks.webp';
import mercaditoArtesanal from '../assets/emprendedores/mercadito-artesanal.webp';
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
	{ name: 'Jilote Taller', logo: jiloteTaller },
	{ name: 'Las Botachelas', logo: lasBotachelas },
	{ name: 'Llyreen Snacks', logo: llyreenSnacks },
	{ name: 'Mercadito Artesanal', logo: mercaditoArtesanal },
	{ name: 'MicheDrinks', logo: michedrinks },
	{ name: 'Octli Xilotl', logo: octliXilotl },
	{ name: 'Ropa Aguilar', logo: ropaAguilar },
	{ name: 'Sinergia 3D', logo: sinergia3d },
];
