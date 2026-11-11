// Lo usan Social y Footer.
export interface SocialAccount {
	platform: 'instagram' | 'facebook';
	platformLabel: string;
	name: string;
	handle: string;
	href: string;
	bg: string;
	text: string;
}

export const socialAccounts: SocialAccount[] = [
	{
		platform: 'instagram',
		platformLabel: 'Instagram',
		name: 'IMJUVE Jilotepec',
		handle: '@imjuvejilo',
		href: 'https://www.instagram.com/imjuvejilo/',
		bg: 'bg-red',
		text: 'text-cream',
	},
	{
		platform: 'facebook',
		platformLabel: 'Facebook',
		name: 'IMJUVE Jilotepec',
		handle: 'Imjuve de Jilotepec',
		href: 'https://www.facebook.com/p/Imjuve-de-Jilotepec-100027352226162/',
		bg: 'bg-purple',
		text: 'text-cream',
	},
	{
		platform: 'facebook',
		platformLabel: 'Facebook',
		name: 'Turismo Jilotepec',
		handle: '@TurismoJilo',
		href: 'https://www.facebook.com/TurismoJilo/',
		bg: 'bg-blue',
		text: 'text-ink',
	},
	{
		platform: 'instagram',
		platformLabel: 'Instagram',
		name: 'Jilotepec Pueblo Mágico',
		handle: '@jilo.pueblo.magico',
		href: 'https://www.instagram.com/jilo.pueblo.magico/',
		bg: 'bg-green',
		text: 'text-ink',
	},
];
