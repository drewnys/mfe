import React, { lazy, Suspense } from 'react';
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
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth' component={AuthLazy} />
                            <Route path='/' component={MarketingLazy} />
                        </Switch> 
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
};