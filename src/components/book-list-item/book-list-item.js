import React from 'react';
import './style.css'


const BookListItem = ({book, onAdded}) => {

    const {title, author, price, src} = book;

    return (
        <div className='d-flex' >
            <p className='col-3'>
                <img className='new-image' src={src} alt="here"/>
            </p>
            <div className="mt-5">
                <p className='text-success'>Title: {title}</p>
                <p>Author: {author}</p>
                <p className='text-warning'>Price: {price}</p>
                <button type='button' className='btn btn-primary' onClick={onAdded}>Add to cart</button>
            </div>
        </div>
    )
};

export default BookListItem;