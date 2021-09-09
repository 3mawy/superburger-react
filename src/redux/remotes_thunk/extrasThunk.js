import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore} from "./helper";

const requestOptions = {
    headers: {'Authorization': getTokenFromStore()},
};

export const getExtras = createAsyncThunk(
    'extras/getExtras',
    async () => {
        const response = await fetch(`http://127.0.0.1:8000/extras`, requestOptions)
            .then((res) =>
            res.json()
        )
        return response
    }
)