import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// Added lazy and suspense for lazy loading
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co' // Custom prefix for CSS collision abatement 
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header 
                        onSignOut={() => setIsSignedIn(false)}
                        isSignedIn={isSignedIn} 
                    />
                    <Suspense fallback={<Progress />} >
                        <Switch>
                            <Route path='/auth' >
                                <AuthLazy onAuthChange={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path='/' >
                                <MarketingLazy onAuthChange={() => setIsSignedIn(true)} />
                            </Route>
                        </Switch> 
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};