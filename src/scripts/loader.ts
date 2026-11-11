// Resuelve cuando el loader empieza a desaparecer, para que ninguna animación
// corra mientras el overlay la tapa. Resuelve de inmediato si ya no está, y
// a los 4.5 s como respaldo por si el script del loader falla.
export function whenLoaderGone(): Promise<void> {
	const loader = document.getElementById('loader');
	if (!loader || loader.dataset.hidden === 'true') return Promise.resolve();
	return new Promise<void>((resolve) => {
		window.addEventListener('juveland:loader-hidden', () => resolve(), { once: true });
		window.setTimeout(resolve, 4500);
	});
}
