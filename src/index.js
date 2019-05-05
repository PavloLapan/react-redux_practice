import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

import App from "./components/app/app";
import ErrorBoundry from './components/error-boundry';
import BookStore from './services';
import {BookstoreServiceProvider} from "./components/cookstore-service-context";

import store from './store'


const bookStore = new BookStore();



ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookStore}>
                <Router>
                    <App/>
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);