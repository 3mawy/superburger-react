import {createSlice} from '@reduxjs/toolkit'

const initialState = {mode: ""}

const nightModeSlice = createSlice({
    name: 'nightMode',
    initialState,
    reducers: {
        toggle(state) {
            if (state.mode === "") {
                state.mode = "dark"
            } else {
                state.mode = ""
            }
        }
    },
})

export const { toggle } = nightModeSlice.actions
export const selectColorMode = (state) => state.nightMode.mode
export default nightModeSlice.reducer