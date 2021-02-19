import {createAsyncThunk} from "@reduxjs/toolkit";

export const getMenuItems = createAsyncThunk(
    'menuItems/getItems',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/sizes/').then((res) =>
            res.json()
        )
        return response
    }
)

export const getMenuItemsByCategory = createAsyncThunk(
    'menuItems/getItemsByCategory',
    async () => {
        const response = await fetch(`http://127.0.0.1:8000/sizes?category=chicken`)
            .then((res) => res.json()
        )
        return response
    }
)
