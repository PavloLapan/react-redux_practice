import React from 'react';
import { connect } from 'react-redux'
import {bookRemove, bookDecrease, bookIncrease } from '../../actions'

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) =>{
        const {id, title, total, count} = item;
        return (
            <tr key={id}>
                <td>{idx +1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td> $ {total}</td>
                <td>
                    <button type='button' className='btn btn-success fa fa-plus-square m-1'
                            onClick={() => onIncrease(id)}
                    ></button>
                    <button type='button' className='btn btn-warning fa fa-minus-square m-1'
                            onClick={() => onDecrease(id)}
                    ></button>
                    <button type='button' className='btn btn-danger fa fa-trash m-1'
                            onClick={() => onDelete(id)}
                    ></button>
                </td>
            </tr>
        )
    };

    return (
        <div>
            <h2>Your orders</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((renderRow))
                }
                </tbody>
                <tbody>

                </tbody>


            </table>
            <h3>Total <span className='text-warning'>{total}</span> $</h3>
        </div>
    )
};

const mapStateToProps=({shippingCart: {cartItems, orderTotal}})=>{
    return{
        items: cartItems,
        total: orderTotal

    }
};

const mapDispatchToProps ={
        onIncrease: bookIncrease,
        onDecrease: bookDecrease,
        onDelete: bookRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);