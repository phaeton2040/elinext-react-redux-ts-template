import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    initialState: { value: 0 },
    name: 'count',
    reducers: {
        increment: (state: { value: number }) => {
            state.value += 1;
        },
        decrement: (state: { value: number }) => {
            state.value -= 1;
        }
    }
});

export const { increment, decrement } = countSlice.actions;

export const selectCount = (state: any) => state.count.value;

export default countSlice.reducer;


