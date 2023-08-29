import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: []
}

export const messagesSlice = createSlice({
    name: 'applicationSlice',
    initialState,
    reducers: {
        setMessage (state, action) {
            state.messages.push(action.payload)
        },
        removeMessage (state, action) {
            state.messages = state.messages.filter(message => message.text !== action.payload.text)
        }
    }
})

export const { setMessage, removeMessage } = messagesSlice.actions

export default messagesSlice.reducer