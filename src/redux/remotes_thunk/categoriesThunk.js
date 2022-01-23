import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore, host} from "./helper";

const requestOptions = {
    // headers: {'Authorization': getTokenFromStore()},
};

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async () => {
        const response = await fetch(`${host}/categories`, requestOptions)
            .then((res) =>
            res.json()
        )
        return response
    }
)