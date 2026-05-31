import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { api } from "../service/api";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [api.reducerPath]: api.reducer,
    },

    middleware: getMiddleware => getMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;