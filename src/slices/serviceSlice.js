import { createSlice } from '@reduxjs/toolkit'
import {  } from "react-icons/bi";

const initialState = {
    services: [
        {
            id: 1,
            img: 'https://static.vecteezy.com/system/resources/previews/005/617/312/non_2x/japanese-samurai-warrior-illustration-free-vector.jpg',
            text: "Lorem Ipsum is simply ",
        },
        {
            id: 2,
            img: 'https://media.istockphoto.com/id/1011084724/vector/japanese-samourai-with-sword.jpg?s=612x612&w=0&k=20&c=SOTl48Rvt9qKiS_0Y45gw3hJxXszibJWgLt4QlF6yOk=',
            text: "Lorem Ipsum is simply Lorem "
        },
        {
            id: 3,
            img: 'https://media.istockphoto.com/id/1287644017/vector/samurai-with-sword.jpg?s=612x612&w=0&k=20&c=Enz34KfZSLK04ofY5jE69cMsT2JDEvsrLXLJhmjBTyU=',
            text: "Lorem Ipsum is simply "
        },
        {
            id: 4,
            img: 'https://media.istockphoto.com/id/1287644017/vector/samurai-with-sword.jpg?s=612x612&w=0&k=20&c=Enz34KfZSLK04ofY5jE69cMsT2JDEvsrLXLJhmjBTyU=',
            text: "Lorem Ipsum is simply"
        },
        {
            id: 5,
            img: 'https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg',
            text: "Lorem Ipsum is simply"
        },
        {
            id: 6,
            img: 'https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg',
            text: "Lorem Ipsum is simply"
        }
    ]
}

export const serviceSlice = createSlice({
    name: 'serviceSlice',
    initialState,
    reducers: {
        changeService (state, action) {
            state.services = action.payload
        }
    }
})

export const { changeService } = serviceSlice.actions

export default serviceSlice.reducer
