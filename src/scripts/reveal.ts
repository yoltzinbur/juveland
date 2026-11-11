// Animaciones de las secciones bajo el pliegue:
// loader fuera → la sección se acerca al viewport → import() de GSAP →
// gsap.matchMedia() con reduced-motion.
//
// El import dinámico evita que GSAP se precargue con la página: solo se
// descarga cuando una sección lo necesita.
import { whenLoaderGone } from './loader';

type GsapModule = typeof import('gsap');
type ScrollTriggerModule = typeof import('gsap/ScrollTrigger');

export type RevealContext = {
	gsap: GsapModule['gsap'];
	ScrollTrigger: ScrollTriggerModule['ScrollTrigger'];
	section: HTMLElement;
	/** true bajo `prefers-reduced-motion: reduce`. */
	reduceMotion: boolean;
};

const MATCH = {
	reduceMotion: '(prefers-reduced-motion: reduce)',
	motionOk: '(prefers-reduced-motion: no-preference)',
} as const;

/**
 * Resuelve con la sección `selector` una vez que (a) el Loader se retiró y
 * (b) la sección entró (o está por entrar, rootMargin 200px) al viewport.
 * Resuelve con `null` si la sección no existe en el DOM.
 */
export function whenSectionVisible(
	selector: string,
	{ rootMargin = '200px' }: { rootMargin?: string } = {},
): Promise<HTMLElement | null> {
	const section = document.querySelector<HTMLElement>(selector);
	if (!section) return Promise.resolve(null);

	return whenLoaderGone().then(
		() =>
			new Promise<HTMLElement | null>((resolve) => {
				if (!('IntersectionObserver' in window)) {
					resolve(section);
					return;
				}
				const io = new IntersectionObserver(
					(entries, obs) => {
						if (!entries.some((entry) => entry.isIntersecting)) return;
						obs.disconnect();
						resolve(section);
					},
					{ rootMargin },
				);
				io.observe(section);
			}),
	);
}

/** import() dinámico de GSAP + ScrollTrigger, con el plugin ya registrado. */
export async function loadScrollGsap(): Promise<{
	gsap: GsapModule['gsap'];
	ScrollTrigger: ScrollTriggerModule['ScrollTrigger'];
}> {
	const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
	gsap.registerPlugin(ScrollTrigger);
	return { gsap, ScrollTrigger };
}

/**
 * Azúcar para el caso común: cuando la sección se acerca al viewport, carga
 * GSAP y llama a `build` dentro de `gsap.matchMedia()` (una sola de las dos
 * condiciones hace match, así que `build` corre exactamente una vez).
 */
export function onSectionReveal(
	selector: string,
	build: (ctx: RevealContext) => void,
	options: { rootMargin?: string } = {},
): void {
	whenSectionVisible(selector, options).then((section) => {
		if (!section) return;
		loadScrollGsap().then(({ gsap, ScrollTrigger }) => {
			gsap.matchMedia().add(MATCH, (context) => {
				const { reduceMotion } = context.conditions as { reduceMotion: boolean };
				build({ gsap, ScrollTrigger, section, reduceMotion });
			});
		});
	});
}
