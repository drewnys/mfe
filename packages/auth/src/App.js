import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'; // Create Memory History instead of Browser History
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au' // Custom prefix for CSS collision abatement 
})

export default ({ history, onAuthChange }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <Signin onAuthChange={onAuthChange}/>
                    </Route>
                    <Route path="/auth/signup">
                        <Signup onAuthChange={onAuthChange}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};