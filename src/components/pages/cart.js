import React from 'react';
import {Link} from 'react-router-dom'

import './home.css'

export default class Cart extends React.Component{

    render() {
        return (
            <div>

                <div className="d-flex justify-content-end jumbotron p-0 pb-3">
                    <Link to="/cart">
                        <h1 className='fa fa-shopping-cart text-primary mr-5 mt-4 '> Cart</h1>
                    </Link>
                    <Link to="/">
                        <h1 className='fa fa-home text-primary mr-5 mt-4 '> Home</h1>
                    </Link>
                </div>

            </div>
        );
    }
}