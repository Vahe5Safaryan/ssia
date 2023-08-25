import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        changeBlog (state, action) {
            state.data = action.payload
        }
    }
})

export const { changeBlog } = blogSlice.actions

export default blogSlice.reducer