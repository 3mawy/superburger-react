import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [{id: "1", name: "ana", price: "50", count: 1},
            {id: "2", name: "aaaaa", price: "80", count: 1}]
    },
    reducers: {
        addToCart: (state, action) => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;

            cartItems.forEach((cItem) => {
                if (cItem.id === action.payload.product['id']) {
                    cItem.count += 1;
                    productAlreadyInCart = true;

                }

            });
            if (!productAlreadyInCart) {
                action.payload.product.count = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload.product]

                }

            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((a) => a.id !== action.payload.id)
        }
    },
})

export const { addToCart, removeFromCart} = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems
export default cartSlice.reducer