import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IShrinkerApi, IShrinkerState } from "../../types/types";
import axios from "axios";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export const fetchShortUrlByLong = createAsyncThunk(
  "shrinker/postLongURL",
  async (url: string, thunkAPI) => {
    const apiAddress = "https://api.shrtco.de/v2/shorten?url=";
    const response = await axios.get(apiAddress + url);
    console.log(response.data);
    return response.data;
  }
);

const initialState: IShrinkerState = {
  longUrl: "",
  shortUrl: "",
};

export const shrinkerSlice = createSlice({
  name: "shrinkerReducer",
  initialState,
  reducers: {
    // increment: (state: IShrinkerState) => {
    //   state.numb += 1;
    // },
    // decrementByAmount: (
    //   state: IShrinkerState,
    //   action: PayloadAction<number>
    // ) => {
    //   state.numb -= action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchShortUrlByLong.fulfilled,
      (state, action: PayloadAction<IShrinkerApi>) => {
        state.shortUrl = action.payload.result.share_link;
        console.log(state.shortUrl);
      }
    );
  },
});

// export const { increment, decrement, incrementByAmount, decrementByAmount } =
//   shrinkerSlice.actions;

export default shrinkerSlice.reducer;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
