import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    currentPage: 1,
    perPage: 12,
    totalItems: 0,
    singleBlog: {},
    showSection: false,
}

export const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState,
    reducers: {
        changeApplication (state, action) {
            state.data = action.payload.data;
            state.currentPage = action.payload.current_page;
            state.perPage = action.payload.per_page;
            state.totalItems = action.payload.total;
        },
        setSingleBlog (state, action) {
            state.singleApplication = action.payload
        },
        setShowContent (state, action) {
            state.showSection = action.payload
        }
    }
})

export const { changeApplication, singleApplication, setShowContent } = applicationSlice.actions

export default applicationSlice.reducer