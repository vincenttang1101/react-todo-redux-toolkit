import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoItem/TodoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
