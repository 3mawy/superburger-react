import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore} from "./helper";

const requestOptions = {
    // headers: {'Authorization': getTokenFromStore()},
};

export const getMenuItems = createAsyncThunk(
    'menuItems/getItems',
    async ({cat = "", page = 1, orderBy = ''} = {}) => {
        const response = await fetch(
            `http://127.0.0.1:8000/menu-items?category=${cat}&page=${page}&ordering=${orderBy}`,
            requestOptions)
            .then((res) =>
                res.json()
            )
        return response
    }
)

// export const getMenuItemsByCategory = createAsyncThunk(
//     'menuItems/getItemsByCategory',
//     async (cat = null, pge = 0) => {
//         const response = await fetch(`http://127.0.0.1:8000/menu_items?category=${cat}`)
//             .then((res) => res.json()
//             )
//         return response
//     }
// )

export const getSingleMenuItem = createAsyncThunk(
    'menuItems/getSingleItem',
    async ({itemId}) => {
        const response = await fetch(`http://127.0.0.1:8000/menu-items/${itemId}`, requestOptions)
            .then((res) => res.json()
            )
        return response
    }
)
