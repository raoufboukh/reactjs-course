export const reducer = (state = 1000, action) =>{
    switch (action.type) {
        case 'WITHDRAW':
            return state - action.paylod;
        case 'DEPOSITE':
            return state + action.paylod;
        default:
            return state;
    }
}