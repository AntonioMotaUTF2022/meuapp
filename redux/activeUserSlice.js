import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    user: null
}

export const activeUserSlice = createSlice({
    name: 'activeUser',
    initialState: initialValues,
    reducers: {
        reducerSetActiveUser: (state, action) => {
            state.user = action.payload.user
        }
    }
})

export const { reducerSetActiveUser } = activeUserSlice.actions

export default activeUserSlice.reducer