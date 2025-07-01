
import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    cartItems: [],
    totalPrice: 0,
    quantity: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity += action.payload.quantity
            }else{
                state.cartItems.push(action.payload)
            }
            state.quantity += action.payload.quantity
            state.totalPrice += action.payload.price * action.payload.quantity
        },
        updateQuantity : (state,action)=>{
            const {id,newQty} = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if(existingItem && newQty > 0){
                const qtyDiff = newQty - existingItem.quantity
                state.quantity += qtyDiff
                state.totalPrice += qtyDiff * existingItem.price
                existingItem.quantity = newQty
            }
        }
    },
})

export const { addToCart,updateQuantity } = cartSlice.actions
export default cartSlice.reducer