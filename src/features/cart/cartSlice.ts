import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: {
    Bread: number;
    Milk: number;
    Cheese: number;
    Soup: number;
    Butter: number;
  };
}

const initialState: CartState = {
  items: {
    Bread: 0,
    Milk: 0,
    Cheese: 0,
    Soup: 0,
    Butter: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<keyof CartState["items"]>) => {
      state.items[action.payload]++;
    },

    decrement: (state, action: PayloadAction<keyof CartState["items"]>) => {
      if (state.items[action.payload] > 0) {
        state.items[action.payload]--;
      }
    },

    clearCart: (state) => {
      state.items = {
        Bread: 0,
        Milk: 0,
        Cheese: 0,
        Soup: 0,
        Butter: 0,
      };
    },
  },
});

export const { increment, decrement, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
