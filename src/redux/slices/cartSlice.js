import {createSlice} from '@reduxjs/toolkit'
import {cartTotal, cartTotalCount} from "../../components/NavBar/helperfunc";


const initialState = {
    cartItems: [],
    itemCount: 0,
    total: 0,
    status: 'initial'
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        resetCart: state => initialState,
        resetStatus:  (state) => {
            state.status = 'initial'
        },
        // TODO
        addOfferToCart: (state, action) => {
            const cartItems = state.cartItems;
            let offerAlreadyInCart = false;

            cartItems.forEach((cItem) => {
                if (cItem.name === action.payload.product['name']
                    && cItem.extras === action.payload.product['extras']) {
                    const quantity = action.payload.quantity
                    cItem.quantity += quantity;
                    offerAlreadyInCart = true;
                }

            });
            if (!offerAlreadyInCart) {
                state.cartItems.push({
                    ...action.payload.product, quantity: action.payload.quantity

                })
            }
            state.total = cartTotal(state.cartItems)
            state.itemCount = cartTotalCount(state.cartItems)

        },
        addToCart: (state, action) => {
            const cartItems = state.cartItems;
            let productAlreadyInCart = false;

            cartItems.forEach((cItem) => {
                if (cItem.name === action.payload.product['name']
                    && cItem.size === action.payload.product['size']) {
                    const quantity = action.payload.quantity
                    cItem.quantity += quantity;
                    productAlreadyInCart = true;

                }

            });
            if (!productAlreadyInCart) {
                state.cartItems.push({
                    ...action.payload.product, quantity: action.payload.quantity
                    , size: action.payload.product.size
                })
            }
            state.total = cartTotal(state.cartItems)
            state.itemCount = cartTotalCount(state.cartItems)
            state.status = 'successful'
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) =>
                item.item !== action.payload.item.item || item.size !== action.payload.item.size
            );
            state.total = cartTotal(state.cartItems)
            state.itemCount = cartTotalCount(state.cartItems)
            state.status = 'removed'
        }
    },
})

export const {resetCart, resetStatus, addToCart, removeFromCart, addOfferToCart} = cartSlice.actions
export const selectCartItems = (state) => state.cart.cartItems
export const selectTotal = (state) => state.cart.total
export const selectItemCount = (state) => state.cart.itemCount
export const selectStatus = (state) => state.cart.status

export default cartSlice.reducer