import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPage: 1,
  totalPage: 1,
  note: ['Hi'],
}

export const notepadSlice = createSlice({
  name: 'notepad',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.nowPage = state.nowPage + 1 <= state.totalPage
      ? state.nowPage + 1
      : 1;
      console.log(state.note);
    },
    prevPage: (state) => {
      state.nowPage = state.nowPage - 1 >= 1
      ? state.nowPage - 1
      : state.totalPage;
    },
    addPage: (state) => {
      state.nowPage += 1;
      state.totalPage += 1;
      state.note.push('');
    },
    savePage: (state, action) => {
      state.note[state.nowPage - 1] = action.payload;
    }
  }
})

export const { nextPage, prevPage, addPage, savePage } = notepadSlice.actions;

export default notepadSlice.reducer