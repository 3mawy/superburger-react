import {createAsyncThunk} from "@reduxjs/toolkit";

export const getMenuItems = createAsyncThunk(
    'menuItems/getItems',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/menu_items').then((res) =>
            res.json()
        )
        return response
    }
)

export const getMenuItemsByCategory = createAsyncThunk(
    'menuItems/getItemsByCategory',
    async (cat) => {
        const response = await fetch(`http://127.0.0.1:8000/menu_items?category=${cat}`)
            .then((res) => res.json()
            )
        return response
    }
)

export const getSingleMenuItem = createAsyncThunk(
    'menuItems/getSingleItem',
    async (itemId) => {
        const response = await fetch(`http://127.0.0.1:8000/menu_items/${itemId}`)
            .then((res) => res.json()
            )
        return response
    }
)
