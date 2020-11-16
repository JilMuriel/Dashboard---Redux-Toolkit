import { createSlice } from "@reduxjs/toolkit";

export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    title: "Sales",
    percent: "20%",
    info: [
      {
        title: "Lifetime Sales",
        amount: 175000,
      },
      {
        title: "Revenue Sales",
        amount: 170000,
      },
    ],
    remarks: "Average Order Value",
    avargeOrderValue: 1000000,
  },
});

export default salesSlice.reducer;
