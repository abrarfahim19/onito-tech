import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const receiptInit = {
  receipts: [
    {
      id: uuidv4(),
      date: "2022-12-20",
      amount: "1200",
      paymentMethod: "card",
      remark: "Male Patient",
    },
    {
      id: uuidv4(),
      date: "2022-08-20",
      amount: "2000",
      paymentMethod: "cash",
      remark: "Female Patient",
    },
  ],
};

const receiptSlice = createSlice({
  name: "receipt",
  initialState: receiptInit,
  reducers: {
    showReceipt: (state) => {
      return state;
    },
    addReceipt: (state, action) => {
      state.receipts.push(action.payload);
    },
    editReceipt: (state, action) => {
      const { id, date, amount, paymentMethod, remark } = action.payload;
      const isReceiptExist = state.receipts.filter(
        (receipt) => receipt.id === id
      );
      if (isReceiptExist) {
        isReceiptExist[0].date = date;
        isReceiptExist[0].amount = amount;
        isReceiptExist[0].paymentMethod = paymentMethod;
        isReceiptExist[0].remark = remark;
      }
    },
    deleteReceipt: (state, action) => {
      const id = action.payload;
      state.receipts = state.receipts.filter((receipt) => receipt.id !== id);
    },
  },
});

export const { showReceipt, addReceipt, editReceipt, deleteReceipt } =
  receiptSlice.actions;

export default receiptSlice.reducer;
