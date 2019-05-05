

const booksRequested=()=>{
    return{
        type: 'FETCH_BOOKS_REQUEST',
    }
};

const booksLoaded = (newBooks) =>{
    return{
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};



const booksError = (error) =>{
    return{
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const bookAdded = (bookId) => {
    return{
        type: 'BOOK_ADDED',
        payload: bookId
    }
};
const bookRemove = (bookId) => {
    return{
        type: 'BOOK_REMOVE',
        payload: bookId
    }
};
const bookDecrease = (bookId) => {
    return{
        type: 'BOOK_DECREASE',
        payload: bookId
    }
};
const bookIncrease = (bookId) => {
    return{
        type: 'BOOK_ADDED',
        payload: bookId
    }
};


const fetchBooks = ( bookstoreService, dispatch ) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

export {
    fetchBooks,
    bookAdded, bookDecrease, bookIncrease, bookRemove

}
