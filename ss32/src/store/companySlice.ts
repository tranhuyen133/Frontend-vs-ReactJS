import { createSlice } from "@reduxjs/toolkit";

interface CompanyState {
  name: string;
}

const initialState: CompanyState = {
  name: "Rikkei Academy",
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    changeCompany: (state) => {
      state.name = "RikkeiSoft";
    },
  },
});

export const { changeCompany } = companySlice.actions;
export default companySlice.reducer;
