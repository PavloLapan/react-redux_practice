import React from 'react';
import withBookstoreService from '../hoc/with-bookstore-service'
import Home from "../pages/home";

import {Route, Switch} from 'react-router-dom';
import Cart from "../pages/cart";




const App = () => {

    return (
        <div>
            <Switch>

                <Route path='/' exact component={Home}/>
                <Route path='/cart' component={Cart}/>

            </Switch>
        </div>
    );
};

export default withBookstoreService()(App)