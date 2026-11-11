// Lo usan Navbar y Footer.
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
