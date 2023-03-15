import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'

// Added lazy and suspense for lazy loading
const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co' // Custom prefix for CSS collision abatement 
})

const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn){
            history.push('/dashboard')
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
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
                            <Route path='/dashboard' >
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy />
                            </Route>
                            <Route path='/' >
                                <MarketingLazy />
                            </Route>
                        </Switch> 
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
};