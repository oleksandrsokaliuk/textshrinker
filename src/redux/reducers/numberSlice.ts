import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INumberState } from "../../types/types";

const initialState: INumberState = {
  numb: 0,
};

export const numberSlice = createSlice({
  name: "numberReducer",
  initialState,
  reducers: {
    increment: (state: INumberState) => {
      state.numb += 1;
    },
    decrement: (state: INumberState) => {
      state.numb -= 1;
    },
    incrementByAmount: (state: INumberState, action: PayloadAction<number>) => {
      state.numb += action.payload;
    },
    decrementByAmount: (state: INumberState, action: PayloadAction<number>) => {
      state.numb -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  numberSlice.actions;

export default numberSlice.reducer;
