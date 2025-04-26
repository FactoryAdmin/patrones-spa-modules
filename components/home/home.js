export async function renderHome() {
	const html = await fetch('./components/home/home.html').then((render) =>
		render.text()
	);
	const navbar = await fetch('./components/navbar/navbar.html').then((render) =>
		render.text()
	);
	const app = document.getElementById('app');
	app.innerHTML = navbar;
	app.innerHTML += html;

	if (!document.querySelector('link[href="./components/home/home.css"]')) {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = './components/home/home.css';
		document.head.appendChild(link);
	}
}
