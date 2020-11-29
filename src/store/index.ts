import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/count";
import { reducer as formReducer } from 'redux-form'

export const store = configureStore({
    reducer: {
        count: countReducer,
        form: formReducer
    }
});
