import {configureStore} from '@reduxjs/toolkit';
import prodSlice from './slice/prodSlice';
import cardSlice from './slice/cardSlice';


export const store = configureStore({
    reducer: { 
        products: prodSlice,
        cards: cardSlice,
    }
})