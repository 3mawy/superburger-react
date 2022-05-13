import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTokenFromStore, host} from "./helper";

const requestOptions = {
    // headers: {'Authorization': getTokenFromStore()},
};
export const getOffers = createAsyncThunk(
    'offers/getOffers',
    async ({page = 1} = {}) => {
        const response = await fetch(
            `${host}/offers?page=${page}`,
            requestOptions).then((res) =>
            res.json()
        )
        return response
    }
)
export const getSingleOffer = createAsyncThunk(
    'offers/getSingleOffer',
    async ({offerId}) => {
        const response = await fetch(`${host}/offers/${offerId}`, requestOptions).then((res) =>
            res.json()
        )
        return response
    }
)
