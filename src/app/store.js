import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import notepadReducer from "../features/notepad/notepadSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notepad: notepadReducer,
  },
})