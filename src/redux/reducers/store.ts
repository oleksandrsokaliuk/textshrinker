import { configureStore } from "@reduxjs/toolkit";
import shrinkerSlice from "./shrinkerSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, shrinkerSlice);

const store = configureStore({
  reducer: { persistedReducer },
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
