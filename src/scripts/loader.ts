// Señal compartida "el Loader ya se retiró" — la usaban, copiada verbatim,
// Chips/WhyAttend/Agenda/Bandas/Emprendedores y (inline) Hero. El Loader
// (overlay z-[100], ~1.3s) tapa el Hero mientras está visible: si una entrada
// con ScrollTrigger que ya nace por encima de su línea de disparo se reproduce
// antes de que el overlay se vaya, pasa entera detrás del cream sin que nadie
// la vea. `whenLoaderGone()` resuelve al instante si no hay Loader o si ya se
// ocultó (`data-hidden="true"`); si no, espera el evento `juveland:loader-hidden`
// que emite Loader.astro al empezar a desvanecerse, con un salvavidas de 4.5s
// por si el script del Loader falla antes de emitirlo.
export function whenLoaderGone(): Promise<void> {
	const loader = document.getElementById('loader');
	if (!loader || loader.dataset.hidden === 'true') return Promise.resolve();
	return new Promise<void>((resolve) => {
		window.addEventListener('juveland:loader-hidden', () => resolve(), { once: true });
		window.setTimeout(resolve, 4500);
	});
}
