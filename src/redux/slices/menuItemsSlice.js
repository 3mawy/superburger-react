import {createSlice} from '@reduxjs/toolkit'
import {getMenuItems, getSingleMenuItem} from "../remotes_thunk/menuItemsThunk"


const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState: {menuItems: {}, status: 'idle'},
    reducers: {

        },
    extraReducers: {
        [getMenuItems.pending]: (state) => {
            state.status = 'loading'
        },
        // [getMenuItems.fulfilled]: userAdapter.upsertMany,
        [getMenuItems.fulfilled]: (state, action) => {
            state.menuItems = action.payload
            state.status = 'success'
        },
        [getMenuItems.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectMenuItems = (state) => state.menuItems
export const selectItem = (state) => state.menuItem

export default menuItemsSlice.reducer