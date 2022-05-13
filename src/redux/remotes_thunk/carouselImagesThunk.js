import {createAsyncThunk} from "@reduxjs/toolkit";
import {host} from "./helper";


export const getCarouselImages = createAsyncThunk(
    'carousel/getImages',
    async () => {
        const response = await fetch(`${host}/carousel-images`)
            .then((res) =>
            res.json()
        )
        return response
    }
)