import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './sectionSlice';

export const store = configureStore({
    reducer: {
        section: sectionReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;