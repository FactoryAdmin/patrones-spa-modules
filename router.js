import { renderHome } from './components/home/home.js';
import { renderLogin } from './components/login/login.js';
import { renderProducts } from './components/products/products.js';
const DEFAULT_ROUTE = '#/login';

function isLoggedIn() {
	return sessionStorage.getItem('loggedIn') === 'true';
}

export function router() {
	const route = location.hash;
	if (!isLoggedIn() && route !== DEFAULT_ROUTE) {
		location.hash = DEFAULT_ROUTE;
		return;
	}

	switch (route) {
		case '#/':
			renderHome();
			break;
		case '#/products':
			renderProducts();
			break;
		case '#/login':
		default:
			renderLogin();
	}
}
