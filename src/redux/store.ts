import { bioApiSlice } from "@/features/bio/ApiSlice";
import { musicApi } from "@/features/music/ApiSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        [bioApiSlice.reducerPath]: bioApiSlice.reducer,
        [musicApi.reducerPath]: musicApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bioApiSlice.middleware, musicApi.middleware),
});

export const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;