import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    description_en: "",
    description_ru: "",
    description_hy: "",
    video_url: "",
}


export const heroSlice = createSlice({
    name: 'heroSlice',
    initialState,
    reducers: {
        changeVideo (state, action) {
            state.description_en = action.payload.description_en
            state.description_ru = action.payload.description_ru
            state.description_hy = action.payload.description_hy
            state.video_url = action.payload.video_url
        }
    }
})



export const { changeVideo } = heroSlice.actions
export default heroSlice.reducer