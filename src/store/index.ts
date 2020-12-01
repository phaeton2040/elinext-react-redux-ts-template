import { configureStore } from "@reduxjs/toolkit";
import ohlcReducer from "./features/ohlc";
import { reducer as formReducer } from 'redux-form'

export const store = configureStore({
    reducer: {
        ohlc: ohlcReducer,
        form: formReducer
    }
});
