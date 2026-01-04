import { configureStore} from '@reduxjs/toolkit';
import slice from './slice/slice';
import prodSlice from './slice/prodSlice';


export const store = configureStore({
    reducer: {
        bank: slice,
        products: prodSlice
    },
})