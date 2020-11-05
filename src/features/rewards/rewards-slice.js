import { createSlice } from "@reduxjs/toolkit";

export const rewardsSlice = createSlice({
  name: "rewards",
  initialState: {
    title: "Rewards Program",
    percent: "20%",
    info: [
      {
        title: "Lifetime SMS",
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

export default rewardsSlice.reducer;
