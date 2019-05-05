import React from 'react';
import {Link} from 'react-router-dom'

import './home.css'
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";



export default class Home extends React.Component {



    render() {
        return (
            <div>
                <div className="d-flex justify-content-end jumbotron p-0 pb-3">
                    <Link to="/cart">
                        <h1 className='fa fa-shopping-cart text-primary mr-5 mt-4 '> 5 <span className='text-danger'>Cart</span> </h1>
                    </Link>
                    <Link to="/">
                        <h1 className='fa fa-home text-primary mr-5 mt-4 '> <span className='text-danger'>Home</span> </h1>
                    </Link>
                </div>

                <BookList/>
                <ShoppingCartTable/>

            </div>
        );
    }
}