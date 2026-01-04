export const ADD = 'ADD';
export const GET = 'GET';


export const withdraw = (amount) => {
    return{
        type: 'WITHDRAW',
        paylod: amount
    }
}
export const deposite = (amount) => {
    return{
        type: 'DEPOSITE',
        paylod: amount
    }
}


export const addProduct = (product) => {
    return{
        type: ADD,
        paylod: product
    }
}

export const getProducts = (products) =>{
    return {
        type:GET,
        paylod:products
    }
}


export const fetchProd = () =>{
    return async(dispatch) =>{
        const prod = await fetch('https://fakestoreapi.com/products');
        const data = await prod.json();
        // console.log(data);
        dispatch(getProducts(data));
    }
}