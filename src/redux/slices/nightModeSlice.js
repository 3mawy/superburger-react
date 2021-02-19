import { createSlice } from '@reduxjs/toolkit'

const initialState = { mode: "" }

export const nightModeSlice = createSlice({
  name: 'nightMode',
  initialState,
  reducers: {
    toggle(state) {
        if (state.mode === ""){
            state.mode = "dark"
        }
        else {
            state.mode = ""
        }
    }
  },
})

// export const { actions, reducer } = nightModeReducer
// export const { toggle } = nightModeSlice.actions
// export default nightModeSlice.reducer