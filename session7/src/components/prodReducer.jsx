import {ADD , GET} from './action';



export const productsReducer = (state = [{id:1,title:'raouf'}], action) =>{
    switch (action.type) {
        case ADD:
            return [...state ,action.paylod];
        case GET:
            return[...action.paylod];
        default:
            return state;
    }
}