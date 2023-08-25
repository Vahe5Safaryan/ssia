import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
        setGalleryItems (state, action) {
            state.data = action.payload
        }
    }
})

export const { setGalleryItems } = gallerySlice.actions

export default gallerySlice.reducer