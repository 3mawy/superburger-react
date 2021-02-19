import {createAsyncThunk} from "@reduxjs/toolkit";

export const getOffers = createAsyncThunk(
    'offers/getOffers',
    async () => {
        const response = await fetch('http://127.0.0.1:8000/offers').then((res) =>
            res.json()
        )
        return response
    }
)
export const getSingleOffer = createAsyncThunk(
    'offers/getSingleOffer',
    async (offerId) => {
        const response = await fetch(`http://127.0.0.1:8000/offers/${offerId}`).then((res) =>
            res.json()
        )
        return response
    }
)
