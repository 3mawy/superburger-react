import {createSlice} from '@reduxjs/toolkit'
import {getSingleOffer} from "../remotes_thunk/offersThunk";


const singleOfferSlice = createSlice({
    name: 'offer',
    initialState: {item: {}, status: 'idle'},
    extraReducers: {
        [getSingleOffer.pending]: (state) => {
            state.status = 'loading'
        },
        [getSingleOffer.fulfilled]: (state, action) => {
            state.item = action.payload
            state.status = 'success'
        },
        [getSingleOffer.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectSingleOffer = (state) => state.offer
export const selectOfferItems = (state) => state.offer.item.menu_items

export default singleOfferSlice.reducer