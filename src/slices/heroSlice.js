import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    video: "Video/video1.mp4",
}


export const heroSlice = createSlice({
    name: 'heroSlice',
    initialState,
    reducers: {
        changeVideo (state, action) {
            state.text = action.payload
            state.video = action.payload
        }
    }
})



export const { changeVideo } = heroSlice.actions
export default heroSlice.reducer