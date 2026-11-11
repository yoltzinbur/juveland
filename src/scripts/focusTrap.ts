// Trampa de foco para los diálogos modales (menú móvil e InfoSheet).
// `aria-modal` no impide que el teclado salga del diálogo ni devuelve el foco
// al cerrar; esto se encarga de ambas cosas. Escape y el botón "atrás" los
// maneja cada componente.
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
