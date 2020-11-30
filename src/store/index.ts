import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search";
import { reducer as formReducer } from 'redux-form'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        form: formReducer
    }
});
