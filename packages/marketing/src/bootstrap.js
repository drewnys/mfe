import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';  // Use Memory instead of Browser History
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    // If we provided a default history use it, otherwise create it
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    }); 

    if (onNavigate){
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el)

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;

            if (pathname !== nextPathname){
                history.push(nextPathname);
            }
        },
    };
};

// If we are in development and in isoloation, call mount immediately
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot){
        mount (devRoot, { defaultHistory: createBrowserHistory() }); // Add optional parameters for isolation navigation
    }
}

// We are running through the CONTAINER and we should export from the mount function
export { mount };