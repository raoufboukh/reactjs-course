import { createSlice } from "@reduxjs/toolkit";
function local(arr){
    localStorage.setItem("cards",JSON.stringify(arr))
}
let cards = []
if(localStorage.getItem("cards")){
    cards = JSON.parse(localStorage.getItem("cards"))
}
export const cardSlice = createSlice({
    initialState:cards,
    name:'cardSlice',
    reducers:{
        setCards:(state,action)=>{
            const findCard = state.find((card) => card.id === action.payload.id);
            console.log(findCard);
            if(findCard){
                findCard.quantite +=1;
                local(state);
            }else{  
                const clone = {...action.payload,quantite:1}
                state.push(clone);
                local(state);
            }
        },
        getCards:(state,action)=>{
            return [...state];
        },
        deleteCard:(state,action)=>{
            // state.splice(state.findIndex(item=>item.id===action.payload),1);
            // state.splice(state.indexOf(action.payload),1)
            state = state.filter(item=>item.id!==action.payload.id);
            console.log(state);
            local(state);
            return state;
        },
        clear:(state,action)=>{
            localStorage.clear();
            return [];
        }
    }
})


export const {setCards, getCards,deleteCard,clear} = cardSlice.actions;
export default cardSlice.reducer;
