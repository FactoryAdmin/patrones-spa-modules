export async function renderLogin() {
	const html = await fetch('./components/login/login.html').then((render) =>
		render.text()
	);
	document.getElementById('app').innerHTML = html;
	//cargo los estilos de mi componente
	if (!document.querySelector('link[href="./components/login/login.css"]')) {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = './components/login/login.css';
		document.head.appendChild(link);
	}
	document.getElementById('loginForm').addEventListener('submit', (e) => {
		e.preventDefault();
		//destructuring de los elementos target:
		const { username, password } = e.target;
		//simulamos credenciales:
		if (username.value === 'admin' && password.value === '123') {
			sessionStorage.setItem('loggedIn', 'true');
			location.hash = '#/';
		} else {
			alert('credenciales incorrectas');
		}
	});
}
