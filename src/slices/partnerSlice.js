import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
};

export const partnerSlice = createSlice({
    name: 'partnerSlice',
    initialState,
    reducers: {
        setPartnerItems(state, action) {
            state.data = action.payload;
        },
    }
})

export const { setPartnerItems } = partnerSlice.actions

export default partnerSlice.reducer