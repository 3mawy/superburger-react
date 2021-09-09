import {createSlice} from '@reduxjs/toolkit'
import {getOffers, getSingleOffer} from "../remotes_thunk/offersThunk";


const offersSlice = createSlice({
    name: 'offers',
    initialState: {offers: {}, status: 'idle'},
    extraReducers: {
        [getOffers.pending]: (state) => {
            state.status = 'loading'
        },
        [getOffers.fulfilled]: (state, action) => {
            state.offers = action.payload
            state.status = 'success'
        },
        [getOffers.rejected]: (state) => {
            state.status = 'failed'
        },
        [getSingleOffer.pending]: (state) => {
            state.status = 'loading'
        },
        [getSingleOffer.fulfilled]: (state, action) => {
            state.offers = action.payload
            state.status = 'success'
        },
        [getSingleOffer.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectOffers = (state) => state.offers

export default offersSlice.reducer