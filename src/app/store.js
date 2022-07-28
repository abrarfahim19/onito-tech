import { configureStore } from "@reduxjs/toolkit";
import receiptReducer from "../features/ReceiptsSlice";

const store = configureStore({
  reducer: {
    receiptReducer: receiptReducer,
  },
});
export default store;
