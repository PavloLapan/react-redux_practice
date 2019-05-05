
const UpdateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateItem = (book, item = {}, quantity) => {

    const {id = book.id, title = book.title, total = 0, count = 0,} = item;

    return {
        id,
        title,
        total: total + quantity * book.price,
        count: count + quantity,
    }
};

const UpdateOrder = (state, bookId, quantity) => {
    console.log(state);
    const {bookList: {books}, shippingCart: {cartItems}} = state;

    const book = books.find((book) => book.id === bookId);

    const stateIndex = cartItems.findIndex(({id}) => id === book.id);
    const item = cartItems[stateIndex];

    const newItem = updateItem(book, item, quantity);

    return {
        orderTotal: 0,
        cartItems: UpdateCartItems(cartItems, newItem, stateIndex)
    }
};

const UpdateBookList = (state, action) => {

    if(state === undefined){
        return {
            books: [],
            loading: true,
            error: false
        }
    }

    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                loading: false,
                error: false
            };

        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true,
                error: null
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        default :
            return state.bookList;

    }
};

const UpdateShoppingCart = (state, action) => {

    if(state === undefined){
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED':
            return UpdateOrder(state, action.payload, 1);

        case 'BOOK_REMOVE':
            const item = state.shippingCart.cartItems.find(({id}) => id === action.payload);
            return UpdateOrder(state, action.payload, -item.count);

        case 'BOOK_DECREASE':
            return UpdateOrder(state, action.payload, -1);

        default:
            return state.shippingCart;
    }
};

const reducer = (state , action) => {
    console.log(state);
    return {
        bookList: UpdateBookList(state, action),
        shippingCart: UpdateShoppingCart(state, action)
    }
};

export default reducer;
