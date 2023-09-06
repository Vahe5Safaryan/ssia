import { createSlice } from '@reduxjs/toolkit'
import i18n from "../i18n";

const initialState = {
    text: " ",
    img: '',
    bg_img: "",
    pdf: ''
}

export const aboutSlice = createSlice({
    name: 'aboutSlice',
    initialState,
    reducers: {
        changeAbout (state, action) {
            state.text = action.payload['description_' + i18n.language]
            state.img = action.payload.img
            state.bg_img = action.payload.bg_img
            state.pdf = action.payload.pdf
        }
    }
})

export const { changeAbout } = aboutSlice.actions

export default aboutSlice.reducer