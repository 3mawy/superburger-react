import {createSlice} from '@reduxjs/toolkit'

const initialState = {language: "ar"}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        arLanguage(state) {
                state.language = "ar"
        },
        enLanguage(state) {
                state.language = "en"
        }
    },
})

export const { arLanguage, enLanguage } = languageSlice.actions
export const selectLanguage = (state) => state.language.language
export default languageSlice.reducer