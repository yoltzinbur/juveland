// Line-up oficial de IMJUVE (gráfico "LINE UP" que mandó el usuario) — fuente
// única para Agenda.astro (paso 7) y Bandas.astro (paso 8), así las dos
// secciones no pueden desincronizarse si el line-up cambia.
//
// Colores: mapeados 1:1 contra el gráfico oficial, rotando
// red/blue/purple/green/lime (PLAN.md paso 7) — el "amarillo" del gráfico se
// resolvió a `lime`, la 5ª tinta que el propio PLAN.md ya designó para esta
// rotación, no una tinta nueva inventada.
//
// `text`: no es la regla genérica de DESIGN.md §3 ("texto sobre blue va en
// cream") porque, medido con la fórmula de contraste WCAG, `ink` da mejor
// contraste sobre `blue`/`green`/`lime` que `cream`.
export interface LineupItem {
	time: string;
	name: string;
	bg: string;
	text: string;
}

export const lineup: LineupItem[] = [
	{ time: '14:00', name: 'Valentino', bg: 'bg-red', text: 'text-cream' },
	{ time: '15:00', name: 'The Rocktor Band', bg: 'bg-blue', text: 'text-ink' },
	{ time: '16:00', name: 'Marty BD', bg: 'bg-purple', text: 'text-cream' },
	{ time: '17:00', name: 'Los Corvett Latin Ska', bg: 'bg-green', text: 'text-ink' },
	{ time: '18:00', name: 'La Frecuenxia', bg: 'bg-lime', text: 'text-ink' },
	{ time: '19:00', name: 'Rapsodia', bg: 'bg-red', text: 'text-cream' },
	{ time: '20:00', name: 'Dopamina', bg: 'bg-blue', text: 'text-ink' },
	{ time: '21:00', name: 'Horus', bg: 'bg-purple', text: 'text-cream' },
	{ time: '22:00', name: 'The Sinners', bg: 'bg-lime', text: 'text-ink' },
];
