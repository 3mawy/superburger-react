import {createAsyncThunk} from "@reduxjs/toolkit";

export const getCurrentUserData = createAsyncThunk(
    'user/getData',
    async (id) => {
        const response = await fetch(`http://127.0.0.1:8000/users/${id}`).then((res) =>
            res.json()
        )
        return response
    }
)