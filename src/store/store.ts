import { configureStore } from "@reduxjs/toolkit";
import { authenticationReducer, todoReducer } from "./slices";

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
