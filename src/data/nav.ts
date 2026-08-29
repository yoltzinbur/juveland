// Links de navegación — fuente única para Navbar.astro (barra + menú móvil) y
// Footer.astro (columna "Navegación"), mismo criterio que src/data/lineup.ts y
// src/data/social.ts: las dos listas estaban definidas idénticas en los dos
// componentes y podían divergir al tocar solo una.
export interface NavLink {
	href: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ href: '#inicio', label: 'Inicio' },
	{ href: '#agenda', label: 'Agenda' },
	{ href: '#territorio-emprende', label: 'Territorio Emprende' },
	{ href: '#mapa', label: 'Mapa' },
	{ href: '#contacto', label: 'Contacto' },
];
