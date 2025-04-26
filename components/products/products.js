export async function renderProducts() {
	const html = await fetch('./components/products/products.html').then(
		(render) => render.text()
	);
	const navbar = await fetch('./components/navbar/navbar.html').then((render) =>
		render.text()
	);
	const app = document.getElementById('app');
	app.innerHTML = navbar;
	app.innerHTML += html;

	if (
		!document.querySelector('link[href="./components/products/products.css"]')
	) {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		(link.href = './components/products/products.css'),
			document.head.appendChild(link);
	}
}
