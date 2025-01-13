import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPortfoliItem } from "../../components/pages/portfolio/IPortfolioItem";

const portfolioSlice = createSlice({
  name: "portfolioSlice",
  initialState: [] as IPortfoliItem[],
  reducers: {
    loadPortfolios: (state, action: PayloadAction<IPortfoliItem[]>) => {
      return [...state, ...action.payload];
    },
    addItem: (state, action: PayloadAction<IPortfoliItem>) => {
      return [...state, action.payload];
    },
  },
});

export const { loadPortfolios, addItem } = portfolioSlice.actions;

export default portfolioSlice.reducer;
