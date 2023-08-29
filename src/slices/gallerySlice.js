import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    currentPage: 1,
    perPage: 12,
    totalItems: 0,
}

export const gallerySlice = createSlice({
    name: 'gallerySlice',
    initialState,
    reducers: {
        setGalleryItems (state, action) {
            state.data = action.payload.data;
            state.currentPage = action.payload.current_page;
            state.perPage = action.payload.per_page;
            state.totalItems = action.payload.total;
        }
    }
})

export const { setGalleryItems } = gallerySlice.actions

export default gallerySlice.reducer