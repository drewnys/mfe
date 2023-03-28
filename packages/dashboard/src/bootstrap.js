import { createApp } from 'vue';
import Dashboard from './components/Dashboard';
import './components/custom-element.js';

// Mount function to start up the app
const mount = (el) => {
    const app = createApp(Dashboard);
    app.mount(el); // !!This mount function is entirely different from the other mount function. This is how we tell Vue to show a component inside the DOM
};

// If we are in development and in isoloation, call mount immediately
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_dashboard-dev-root');

    if (devRoot){
        mount (devRoot); // Add optional parameters for isolation navigation
    }
}

// We are running through the CONTAINER and we should export from the mount function
export { mount };