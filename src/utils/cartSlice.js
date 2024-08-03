import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            // Redux toolkit - either mutate the existing state or return a new state
            // state.items.length=0;
            return {items:[]}
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;