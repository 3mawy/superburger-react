import {createSlice} from '@reduxjs/toolkit'
import {getSingleMenuItem} from "../remotes_thunk/menuItemsThunk"


const singleMenuItemSlice = createSlice({
    name: 'menuItem',
    initialState: {item: {}, status: 'idle'},
    reducers: {},
    extraReducers: {
        [getSingleMenuItem.pending]: (state) => {
            state.status = 'loading'
        },
        [getSingleMenuItem.fulfilled]: (state, action) => {
            state.item = action.payload
            state.status = 'success'
        },
        [getSingleMenuItem.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectSingleMenuItem = (state) => state.menuItem
export const selectSingleMenuItemStatus = (state) => state.menuItem.status
export default singleMenuItemSlice.reducer