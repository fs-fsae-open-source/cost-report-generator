import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { crgState } from "../models/sliceTypes";

const initialState: crgState = {

};

export const crgSlice = createSlice({
    name: "crg",
    initialState,
    reducers: {
        tempReducer: (state, action) => {
            console.log(state, action);
        }
    },
    extraReducers: (builder) => {

    }
});

export const { tempReducer } = crgSlice.actions;
export default crgSlice.reducer;