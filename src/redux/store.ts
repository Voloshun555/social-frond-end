import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist/es/constants";
import authSlice from "./auth/authSlice";
import chatSlice from "./chat/chatSlice";
import messageSlice from "./message/messageSlice";

const persistConfig = {
    key: "auth",
    storage,
    whitelist: ["accessToken"],
};

const rootReducer = combineReducers({
    chat: chatSlice,
    auth: persistReducer(persistConfig, authSlice),
    message: messageSlice
});

export const store = configureStore({
    reducer: rootReducer,
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