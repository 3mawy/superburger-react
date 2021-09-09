import {createSlice} from '@reduxjs/toolkit'
import {getCategories} from "../remotes_thunk/categoriesThunk";


const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {categories: {}, status: 'idle'},
    reducers: {

        },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
            state.status = 'success'
        },
        [getCategories.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectCategories = (state) => state.categories

export default categoriesSlice.reducer