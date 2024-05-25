import { configureStore } from "@reduxjs/toolkit";
import { Videoslice } from "./VideoSlice";

export const store = configureStore({
  reducer: { video: Videoslice.reducer }
})