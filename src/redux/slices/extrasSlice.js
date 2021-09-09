import {createSlice} from '@reduxjs/toolkit'
import {getExtras} from "../remotes_thunk/extrasThunk";


const extrasSlice = createSlice({
    name: 'extras',
    initialState: {extras: {}, status: 'idle'},
    reducers: {

        },
    extraReducers: {
        [getExtras.pending]: (state) => {
            state.status = 'loading'
        },
        [getExtras.fulfilled]: (state, action) => {
            state.extras = action.payload
            state.status = 'success'
        },
        [getExtras.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectExtras = (state) => state.extras.extras.results

export default extrasSlice.reducer