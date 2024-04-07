import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { crgState } from "../models/sliceTypes";
import { Fastener } from "../models/part";

const initialState: crgState = {
    fastenerTypes: {
        0: { id: 0, fastener: "Steel Loop Straps, Rubber-Cushioned", comment: "Comment" },
        1: { id: 1, fastener: "Galvanized Steel Loop Straps", comment: "Comment" }
    },
    currentPart: {
        name: "Temp Part",
        fasteners: {}
    }
};

export const crgSlice = createSlice({
    name: "crg",
    initialState,
    reducers: {
        addFastener: (state, action: PayloadAction<number>) => {
            const typeID = action.payload;

            if (typeID in Object.keys(state.fastenerTypes)) {
                let index = -1;

                // figure out what's the next largest ID
                const keys: number[] = Object.keys(state.currentPart.fasteners).map(Number);
                console.log("keys", keys);

                keys.forEach((x) => {
                    if (x > index) {
                        index = x;
                    }
                })

                // add an empty fastener of this type with the determined ID
                const fastenerID = index + 1;
                state.currentPart.fasteners[fastenerID] = {
                    id: fastenerID,
                    use: "",
                    quantity: 0,
                    typeID: typeID
                }
            }
        },
        removeFastener: (state, action: PayloadAction<number>) => {
            const fastenerID = action.payload;
            console.log("delete", fastenerID);
            delete state.currentPart.fasteners[action.payload];
        },
        updateFastenerField: (state, action: PayloadAction<{ id: number, key: string, value: string | number }>) => {
            const fastenerID = action.payload.id;
            const keyString = action.payload.key;
            const fieldValue = action.payload.value;

            const fastenerIDKey = fastenerID as keyof typeof state.currentPart.fasteners;

            if (state.currentPart.fasteners[fastenerIDKey]) {
                const fastener = state.currentPart.fasteners[fastenerIDKey];
                const key = keyString as keyof typeof fastener;
                fastener[key] = fieldValue;
                state.currentPart.fasteners[fastenerIDKey] = fastener;
            }
        },
        updateFastener: (state, action: PayloadAction<{ id: number, fastener: Fastener }>) => {
            const newFastener = action.payload.fastener;
            console.log("update", newFastener);
            state.currentPart.fasteners[action.payload.id] = action.payload.fastener;
        }
    },
    extraReducers: (builder) => {

    }
});

export const { addFastener, removeFastener, updateFastener, updateFastenerField } = crgSlice.actions;
export default crgSlice.reducer;