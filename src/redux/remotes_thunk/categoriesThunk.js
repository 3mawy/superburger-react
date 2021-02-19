import {createAsyncThunk} from "@reduxjs/toolkit";

export const getMenuItems = createAsyncThunk(
    'menuItems/getItems',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/categories/').then((res) =>
            res.json()
        )
        return response
    }
)
