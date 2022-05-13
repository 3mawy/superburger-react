import {createSlice} from '@reduxjs/toolkit'
import {getOrder, postOrder} from "../remotes_thunk/orderThunk"

const initialState= {order: {}, order_info: {}, status: 'idle'}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrder: state => initialState
    },
    extraReducers: {
        [getOrder.pending]: (state) => {
            state.status = 'loading'
        },
        [getOrder.fulfilled]: (state, action) => {
            state.menuItems = action.payload
            state.status = 'success'
        },
        [getOrder.rejected]: (state) => {
            state.status = 'failed'
        },
        [postOrder.pending]: (state) => {
            state.status = 'loading'
        },
        [postOrder.fulfilled]: (state, action) => {
            state.status = 'success'
        },
        [postOrder.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const { resetOrder} = orderSlice.actions
export const selectOrder = (state) => state.order
export default orderSlice.reducer


