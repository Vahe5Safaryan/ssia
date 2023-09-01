import { createSlice } from '@reduxjs/toolkit'
import i18n from "../i18n";

const initialState = {
    text: " printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    img: '',
    bg_img: ""
}

export const aboutSlice = createSlice({
    name: 'aboutSlice',
    initialState,
    reducers: {
        changeAbout (state, action) {
            state.text = action.payload['description_' + i18n.language]
            state.img = action.payload.img
            state.bg_img = action.payload.bg_img
        }
    }
})

export const { changeAbout } = aboutSlice.actions

export default aboutSlice.reducer