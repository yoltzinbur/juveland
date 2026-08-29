// Trampa de foco reusable para los overlays modales del sitio (el menú móvil
// de Navbar.astro y el InfoSheet). Sin esto, un usuario de teclado tabula
// "detrás" del backdrop mientras el diálogo está abierto, y al cerrar el foco
// se queda perdido en medio de la página en vez de volver al botón que lo
// abrió — las dos cosas que `role="dialog"` + `aria-modal` prometen pero que
// el navegador no hace solo.
//
// Mantiene el patrón ya existente: Escape y el botón "atrás" del teléfono los
// siguen manejando los propios componentes (pushState/popstate); esto solo
// añade el ciclo de foco.
const FOCUSABLE = [
	'a[href]',
	'button:not([disabled])',
	'input:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[tabindex]:not([tabindex="-1"])',
].join(',');

export type FocusTrap = {
	/** Guarda el foco actual y lo mueve al primer elemento enfocable del contenedor. */
	activate: () => void;
	/** Suelta la trampa y devuelve el foco a donde estaba antes de `activate()`. */
	deactivate: () => void;
};

export function createFocusTrap(container: HTMLElement): FocusTrap {
	let previouslyFocused: HTMLElement | null = null;

	const focusable = (): HTMLElement[] =>
		Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
			(el) => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement,
		);

	const onKeydown = (event: KeyboardEvent) => {
		if (event.key !== 'Tab') return;
		const items = focusable();
		if (items.length === 0) {
			event.preventDefault();
			return;
		}
		const first = items[0];
		const last = items[items.length - 1];
		const active = document.activeElement as HTMLElement | null;

		if (event.shiftKey && (active === first || !container.contains(active))) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && active === last) {
			event.preventDefault();
			first.focus();
		}
	};

	return {
		activate() {
			previouslyFocused = document.activeElement as HTMLElement | null;
			document.addEventListener('keydown', onKeydown, true);
			// El primer enfocable suele ser el botón de cerrar / el primer link,
			// que es a dónde un lector de pantalla espera aterrizar al abrir.
			const items = focusable();
			(items[0] ?? container).focus();
		},
		deactivate() {
			document.removeEventListener('keydown', onKeydown, true);
			previouslyFocused?.focus?.();
			previouslyFocused = null;
		},
	};
}
