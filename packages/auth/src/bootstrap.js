import React from 'react';
import ReactDOM from 'react-dom';

// Mount function to start up the app
const mount = (el) => {
    ReactDOM.render(
        <h1>Auth!</h1>,
        el
    )
};

// If we are in development and in isoloation, call mount immediately
if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_auth-dev-root');

    if (devRoot){
        mount (devRoot);
    }
}

// We are running through the CONTAINER and we should export from the mount function
export { mount };