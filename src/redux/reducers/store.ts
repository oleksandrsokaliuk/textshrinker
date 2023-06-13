import { configureStore } from "@reduxjs/toolkit";
import shrinkerSlice from "./shrinkerSlice";

export const store = configureStore({
  reducer: { shrinkerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
