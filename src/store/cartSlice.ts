import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Car = { id: number; name: string; img: string };
const initialState: Car[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Car>) => {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
