import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore} from "./helper";

const requestOptions = {
    // headers: {'Authorization': getTokenFromStore()},
};

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        const response = await fetch(`http://127.0.0.1:8000/categories`, requestOptions)
            .then((res) =>
            res.json()
        )
        return response
    }
)