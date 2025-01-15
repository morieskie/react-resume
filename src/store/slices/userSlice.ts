import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMe } from "../../components/home/IMe";
import { IExperience } from "../../components/home/IExperience";
import { ISocialLink } from "../../components/home/ISociatLink";
import { IEducation } from "../../components/home/IEducation";
import { ITechnology } from "../../components/pages/resume/ITechnology";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: {
      firstName: "Guest",
      lastName: "User",
    },
    bio: "",
    mobileNumber: "",
    email: "",
    address: "",
    socialLinks: [] as ISocialLink[],
    experience: [] as IExperience[],
    education: [] as IEducation[],
    technologies: [] as ITechnology[],
  },
  reducers: {
    setUser: (state, action: PayloadAction<IMe>) => ({
      ...state,
      ...action.payload,
    }),
    setUserExperience: (state, action: PayloadAction<IExperience[]>) => {
      return {
        ...state,
        experience: action.payload,
      };
    },
    setUserEducation: (state, action: PayloadAction<IEducation[]>) => {
      return {
        ...state,
        education: action.payload,
      };
    },
    setUserTechnologies: (state, action: PayloadAction<ITechnology[]>) => {
      return {
        ...state,
        technologies: action.payload,
      };
    },
  },
});

export const { setUser, setUserExperience, setUserEducation, setUserTechnologies } =
  userSlice.actions;

export default userSlice.reducer;
