import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/user-slice";
import salesReducer from "../features/sales/sales.slice";
import engagementReducer from "../features/engagement/engagement-slice";
import acquisitionSlice from "../features/acquisition/acquisition-slice";

export default configureStore({
  reducer: {
    user: userReducer,
    sales: salesReducer,
    engagementReducer: engagementReducer,
    acquisition: acquisitionSlice,
  },
});
