import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null
}

export const authSlice = createSlice({
    name: 'applicationSlice',
    initialState,
    reducers: {
        setAuthUser (state, action) {
            state.user = action.payload
        },
    }
})

export const { setAuthUser } = authSlice.actions

export default authSlice.reducer