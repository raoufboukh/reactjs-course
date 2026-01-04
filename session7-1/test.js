console.log($redux)

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


const store = $redux.createStore(reducer);
store.dispatch({type:"WITHDRAW",paylod:200});
store.subscribe(() => {
    console.log(store.getState());
})