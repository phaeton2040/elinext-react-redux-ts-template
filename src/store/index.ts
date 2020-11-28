import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/count";

export const store = configureStore({
    reducer: {
        count: countReducer
    }
});
