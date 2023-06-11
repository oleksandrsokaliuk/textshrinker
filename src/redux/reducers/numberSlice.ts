import { ButtonEnum, INumberAction, INumberState } from "../../types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: INumberState = {
  numb: 0,
};

export const numberSlice = createSlice({
  name: "numberReducer",
  initialState,
  reducers: {
    increment: (state) => {
      state.numb += 1;
    },
    decrement: (state) => {
      state.numb -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.numb += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.numb -= action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  numberSlice.actions;

export default numberSlice.reducer;
