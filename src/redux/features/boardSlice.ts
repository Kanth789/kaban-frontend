import { createSlice } from '@reduxjs/toolkit';

interface BoardItem {
  _id: string;
  user: string;
  title: string;
  description: string;
  position: number;
  favourite: boolean;
  favouritePosition: number;
  __v: number;
}

interface BoardState {
  boards: BoardItem[];
  addSections:boolean
}

const initialState:BoardState = {
  boards: [],
  addSections:false
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.boards =  action.payload.data ? action.payload.data : action.payload; 
    },
    setAddSections :(state,action)=>{
      state.addSections = action.payload
    }
  },
});

export const { setBoards,setAddSections } = boardSlice.actions;

export default boardSlice.reducer;