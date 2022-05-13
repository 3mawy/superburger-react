import {createSlice} from '@reduxjs/toolkit'

const initialState = {language: "ar"}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggle(state) {
            if (state.language === "ar") {
                state.language = "en"
            } else {
                state.language = "ar"
            }
        }
    },
})

export const {toggle} = languageSlice.actions
export const selectLanguage = (state) => state.language.language
export default languageSlice.reducer