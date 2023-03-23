import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'; // Create Memory History instead of Browser History
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import "./components/custom-element.js"

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma' // Custom prefix for CSS collision abatement 
})

export default ({ history }) => {

    return <div>
        <my-product name="Headphones">
            <h2>Some really cool description of headphones.</h2>
            <div slot="price">$19.99</div>
        </my-product>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};