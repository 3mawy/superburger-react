import {createAsyncThunk} from "@reduxjs/toolkit";


export const getCarouselImages = createAsyncThunk(
    'carousel/getImages',
    async () => {
        const response = await fetch(`http://127.0.0.1:8000/carousel-images`)
            .then((res) =>
            res.json()
        )
        return response
    }
)