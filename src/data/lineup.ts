// Lo usan Agenda y Bandas. Los colores siguen el gráfico oficial del line-up.
//
// `text`: sobre blue/green/lime se usa `ink` porque da mejor contraste WCAG
// que `cream`.
import type { ImageMetadata } from 'astro';
import valentino from '../assets/bands/valentino-miranda.webp';
import rocktorBand from '../assets/bands/the-rocktor-band.webp';
import martyBd from '../assets/bands/marty-bd.webp';
import latinSka from '../assets/bands/latin-ska.webp';
import frecuenxia from '../assets/bands/frecuenxia.webp';
import rapsodia from '../assets/bands/rapsodia.webp';
import dopamina from '../assets/bands/dopamina.webp';
import horus from '../assets/bands/horus.webp';
import theSinners from '../assets/bands/the-sinners.webp';

export interface LineupItem {
	time: string;
	name: string;
	bg: string;
	text: string;
	photo: ImageMetadata;
}

export const lineup: LineupItem[] = [
	{ time: '14:00', name: 'Valentino', bg: 'bg-red', text: 'text-cream', photo: valentino },
	{ time: '15:00', name: 'The Rocktor Band', bg: 'bg-blue', text: 'text-ink', photo: rocktorBand },
	{ time: '16:00', name: 'Marty BD', bg: 'bg-purple', text: 'text-cream', photo: martyBd },
	{ time: '17:00', name: 'Los Corvett Latin Ska', bg: 'bg-green', text: 'text-ink', photo: latinSka },
	{ time: '18:00', name: 'La Frecuenxia', bg: 'bg-lime', text: 'text-ink', photo: frecuenxia },
	{ time: '19:00', name: 'Rapsodia', bg: 'bg-red', text: 'text-cream', photo: rapsodia },
	{ time: '20:00', name: 'Dopamina', bg: 'bg-blue', text: 'text-ink', photo: dopamina },
	{ time: '21:00', name: 'Horus', bg: 'bg-purple', text: 'text-cream', photo: horus },
	{ time: '22:00', name: 'The Sinners', bg: 'bg-lime', text: 'text-ink', photo: theSinners },
];
