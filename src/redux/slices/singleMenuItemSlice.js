import {createSlice} from '@reduxjs/toolkit'
import {getSingleMenuItem} from "../remotes_thunk/menuItemsThunk"
import {useDispatch} from "react-redux";


const singleMenuItemSlice = createSlice({
    name: 'menuItems',
    initialState: {item: {}, status: 'idle'},
    reducers: {},
    extraReducers: {
        [getSingleMenuItem().pending]: (state) => {
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
export const selectSingleMenuItem = (state) => state.menuItem.item
export default singleMenuItemSlice.reducer