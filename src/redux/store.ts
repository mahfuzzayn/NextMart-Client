import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "./storage";

//! We will not do this
//! This is a global variable so we will avoid this
// const store = configureStor({});

const persistOptions = {
    key: "cart",
    storage,
};

const persistedCart = persistReducer(persistOptions, cartReducer);

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: persistedCart,
        },
        middleware: (getDefaultMiddlewares) =>
            getDefaultMiddlewares({
                serializableCheck: {
                    ignoredActions: [
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER,
                    ],
                },
            }),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
