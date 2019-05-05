import React, {Component} from 'react';

export default class ErrorIndicator extends Component{
    render() {
        return (
            <div className='jumbotron'>
                <h2 className='text-center text-warning'>Error</h2>
            </div>
        );
    }
}