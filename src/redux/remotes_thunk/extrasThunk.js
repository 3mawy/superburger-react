import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore, host} from "./helper";

const requestOptions = {
    headers: {'Authorization': getTokenFromStore()},
};

export const getExtras = createAsyncThunk(
    'extras/getExtras',
    async () => {
        const response = await fetch(`${host}/extras`, requestOptions)
            .then((res) =>
            res.json()
        )
        return response
    }
)