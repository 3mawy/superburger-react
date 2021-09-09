import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore} from "./helper";

const requestOptions = {
    // headers: {'Authorization': getTokenFromStore()},
};
export const getOffers = createAsyncThunk(
    'offers/getOffers',
    async ({page = 1} = {}) => {
        const response = await fetch(
            `http://127.0.0.1:8000/offers?page=${page}`,
            requestOptions).then((res) =>
            res.json()
        )
        return response
    }
)
export const getSingleOffer = createAsyncThunk(
    'offers/getSingleOffer',
    async ({offerId}) => {
        const response = await fetch(`http://127.0.0.1:8000/offers/${offerId}`, requestOptions).then((res) =>
            res.json()
        )
        return response
    }
)
