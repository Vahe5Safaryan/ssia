import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    address: "Abovyan, S. Erevanyan 56/1",
    email: "example@gmail.com",
    phone: "000 00 000 000",
}


export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState,
    reducers: {
        changeContact (state, action) {
            state.services = action.payload
        }
    }
})

export const { changeContact } = contactSlice.actions

export default contactSlice.reducer
