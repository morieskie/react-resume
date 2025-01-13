import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMe } from "../../components/home/IMe";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: {
        firstName: "Guest",
        lastName: "User",
      },
      socialLinks: [] as any,
    } as IMe,
  },
  reducers: {
    setUser: (state: { user: IMe }, action: PayloadAction<IMe>) => ({
      ...state,
      user: { ...state.user, ...action.payload },
    }),
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
