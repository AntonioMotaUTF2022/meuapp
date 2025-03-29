import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    item: null
}

export const activeResearchSlice = createSlice({
    name: 'activeResearch',
    initialState: initialValues,
    reducers: {
        reducerSetActiveResearch: (state, action) => {
            state.item = action.payload.item
        }
    }
})

export const { reducerSetActiveResearch } = activeResearchSlice.actions

export default activeResearchSlice.reducer