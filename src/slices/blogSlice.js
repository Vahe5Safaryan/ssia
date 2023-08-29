import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    currentPage: 1,
    perPage: 12,
    totalItems: 0,
    singleBlog: {}
}

export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        changeBlog (state, action) {
            state.data = action.payload.data;
            state.currentPage = action.payload.current_page;
            state.perPage = action.payload.per_page;
            state.totalItems = action.payload.total;
        },
        setSingleBlog (state, action) {
            state.singleBlog = action.payload
        }
    }
})

export const { changeBlog, setSingleBlog } = blogSlice.actions

export default blogSlice.reducer