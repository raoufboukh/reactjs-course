import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
import { productsReducer } from "./prodReducer";
import {thunk} from 'redux-thunk';

const app = combineReducers({
    bank: reducer,
    products: productsReducer
})
export const store = createStore(app ,applyMiddleware(thunk));