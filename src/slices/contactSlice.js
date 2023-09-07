import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    address: "",
    email: "info@ssia.am",
    phone: "055 670 678, 060 670 670",
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
