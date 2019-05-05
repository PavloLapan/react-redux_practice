import React from 'react';
import BookListItem from '../book-list-item'
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc'
import {fetchBooks, bookAdded} from '../../actions'
import './style.css'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BoolList =  (state) =>{
    const {books, onAdded} = state;
    console.log(state);
    return (
        <React.Fragment>
            { console.log(books)}
        <ul className='ml-3 text-primary font-weight-bold new-list'>
            {

                books.map((book) => {
                    return (
                        <li className='' key={book.id}>
                            <BookListItem book={book} onAdded={()=>onAdded(book.id)}/>
                        </li>

                    )
                })
            }
        </ul>
        </React.Fragment>
    );
};

class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchBooks()
    };

    render() {

        const {books, loading, error, onAdded} = this.props;

        if (loading) {
            return <Spinner/>
        }
        if (error) {
            return <ErrorIndicator/>
        }

        return <BoolList books={books} onAdded={onAdded}/>
    }
}

const mapStateToProps = ({ bookList: { books, loading, error}}) => {
    return { books, loading, error}
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAdded: (id)=>dispatch(bookAdded(id))
    }
};



export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));


