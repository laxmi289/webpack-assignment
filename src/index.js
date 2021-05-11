// Test import of a JavaScript module
import App from '@/js/App/App';
import SidePanel from '@/js/SidePanel/SidePanel';

// Test import of styles
import '@/styles/index.scss';

// Appending to the DOM
const app = document.querySelector('#root');
app.append(new App().render());
app.append(new SidePanel().render());
