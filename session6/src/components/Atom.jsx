import { atom } from "recoil";

export const at = atom({
    key: 'productState',
    default: [
        {id:1 , name:"Product 1"},
        {id:2 , name:"Product 2"},
        {id:3 , name:"Product 3"},
    ]
})