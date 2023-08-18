import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        total: 0
    },
    reducers: {
        addToCart(state,action){
            state.cartList.push(action.payload);
            state.total+=action.payload.price;
        },
        removeFromCart(state,action){
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id);
            state.total-=action.payload.price;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;


