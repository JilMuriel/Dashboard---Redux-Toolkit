import { createSlice } from "@reduxjs/toolkit";

export const acquisitionSlice = createSlice({
  name: "Engagement",
  initialState: {
    title: "Acquisition",
    percent: "20%",
    info: [
      {
        title: "Registered Users",
        amount: 285,
      },
      {
        title: "Daily Average",
        amount: 57,
      },
    ],
    remarks: "20% decrease in 30 days",
  },
});

export default acquisitionSlice.reducer;
