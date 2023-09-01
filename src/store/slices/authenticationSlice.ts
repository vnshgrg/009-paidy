import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    authenticate: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { reducer: authenticationReducer } = authenticationSlice;
export const { authenticate } = authenticationSlice.actions;
