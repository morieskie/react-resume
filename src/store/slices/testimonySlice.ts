import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITestimony } from "../../components/testimonial/ITestimony";

const testimonySlice = createSlice({
  name: "testimonySlice",
  initialState: {
    tesimonies: [] as ITestimony[],
  },
  reducers: {
    setTestimonies: (state, action: PayloadAction<ITestimony[]>) => {
      return {
        ...state,
        tesimonies: [...new Set([...state.tesimonies, ...action.payload])],
      };
    },
  },
});

export const {setTestimonies} = testimonySlice.actions;

export default testimonySlice.reducer;
