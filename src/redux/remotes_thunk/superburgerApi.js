// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
//
// // First, create the thunk
// export const getMenuItems = createAsyncThunk(
//     'menuItems/getItems',
//     async (userId, thunkAPI) => {
//         const response = await fetch('http://localhost:8000/categories').then((res) =>
//             res.json()
//         )
//         console.log(response)
//         return response.data
//     }
// )
// // Then, handle actions in your reducers:
// const usersSlice = createSlice({
//     name: 'users',
//     initialState: {entities: [], loading: 'idle'},
//     reducers: {
//         // standard reducer logic, with auto-generated action types per reducer
//     },
//     extraReducers: {
//         [getMenuItems.pending]: (state, action) => {
//             state.status = 'loading'
//         },
//         [getMenuItems.fulfilled]: (state, action) => {
//             state.menuItems = action.payload
//         },
//         [getMenuItems.rejected]: (state, action) => {
//             state.status = 'failed'
//         }
//     }
// })
//
// // Later, dispatch the thunk as needed in the app
// dispatch(getMenuItems())