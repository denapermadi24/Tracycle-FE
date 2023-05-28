import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/header.css';
import '../styles/nav.css';
import '../styles/banner.css';
import '../styles/content.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  menuButton: document.querySelector('.header__menu'),
  closeMenu: document.querySelector('.close__menu'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#head'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
