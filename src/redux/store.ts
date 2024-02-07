import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import  authSlice  from "./slice/authSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
};

const rootReducer = combineReducers({
    authSlice,
});

const persistUsersReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistUsersReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;