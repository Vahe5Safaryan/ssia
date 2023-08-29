import { createSlice } from '@reduxjs/toolkit'
import i18n from "../i18n";

const initialState = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    img: 'https://www.shutterstock.com/image-vector/black-cartoon-ninja-warrior-nunchaku-600w-1679564848.jpg',
    bg_img: "https://static.vecteezy.com/system/resources/previews/001/235/999/large_2x/solar-panel-on-blue-sky-background-free-photo.jpg"
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