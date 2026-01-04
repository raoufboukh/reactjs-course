console.log(Redux);
const ADD = 'ADD';
const GET = 'GET';


const withdraw = (amount) => {
    return{
        type: 'WITHDRAW',
        paylod: amount
    }
}
const deposite = (amount) => {
    return{
        type: 'DEPOSITE',
        paylod: amount
    }
}
const addProduct = (product) => {
    return{
        type: ADD,
        paylod: product
    }
}

const getProducts = (products) =>{
    return {
        type:GET,
        paylod:products
    }
}

const ppp = () =>{
    return async(dispatch) =>{
        const prod = await fetch('https://fakestoreapi.com/products');
        const data = await prod.json();
        console.log(data);
        dispatch(getProducts(data));
    }
}

const reducer = (state = 1000, action) =>{
    switch (action.type) {
        case 'WITHDRAW':
            return state - action.paylod;
        case 'DEPOSITE':
            return state + action.paylod;
        default:
            return state;
    }
}
const productsReducer = (state = [], action) =>{
    switch (action.type) {
        case ADD:
            return [...state ,action.paylod];
        case GET:
            return[...action.paylod];
        default:
            return state;
    }
}

const appReducer = Redux.combineReducers({
    balance: reducer,
    products: productsReducer
})


const store = Redux.createStore(appReducer , Redux.applyMiddleware(ReduxThunk));

// console.log(store.getState());
store.subscribe(() => { // tji m3 ay action ysra wla mise a jour
    console.log(store.getState());
})
store.dispatch(withdraw(200));
store.dispatch(withdraw(400));
store.dispatch(deposite(1000));

// store.dispatch(addProduct({
//     id:1, name:'product1'
// }))