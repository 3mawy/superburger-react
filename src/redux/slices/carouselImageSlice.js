import {createSlice} from '@reduxjs/toolkit'
import {getCarouselImages} from "../remotes_thunk/carouselImagesThunk";


const carouselImageSlice = createSlice({
    name: 'carouselImages',
    initialState: {images: {}, status: 'idle'},
    reducers: {

        },
    extraReducers: {
        [getCarouselImages.pending]: (state) => {
            state.status = 'loading'
        },
        [getCarouselImages.fulfilled]: (state, action) => {
            state.images = action.payload
            state.status = 'success'
        },
        [getCarouselImages.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})
export const selectCarouselImages = (state) => state.carouselImages

export default carouselImageSlice.reducer