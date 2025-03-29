import { configureStore } from "@reduxjs/toolkit";
import activeResearchSlice from "./activeResearchSlice"
import  activeUserSlice  from "./activeUserSlice";

export const store = configureStore({
    reducer: {
        activeResearch: activeResearchSlice,
        activeUser: activeUserSlice
    }
})