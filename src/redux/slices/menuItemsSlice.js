import {createSlice} from '@reduxjs/toolkit'
import {getMenuItems} from "../remotes_thunk/menuItemsThunk"

const menuItemsSlice = createSlice({
    name: 'menuItems',
    initialState: {menuItems: [], status: 'idle'},
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        [getMenuItems.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getMenuItems.fulfilled]: (state, action) => {
            state.menuItems = action.payload
            state.status = 'success'
        },
        [getMenuItems.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default menuItemsSlice