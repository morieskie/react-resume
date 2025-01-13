import { RootState } from "../index";

// Selector to get all portfolio items
export const selectAllPortfolioItems = (state: RootState) => state.portfolios;

// Selector to get a single portfolio item by ID
export const selectPortfolioItemById = (state: RootState, id: string) =>
  state.portfolios.find((item) => String(item.id) === id);
