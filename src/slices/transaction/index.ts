import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ByIdType } from "../../helpers/type";
import _ from "lodash";

export type TransactionData = {
  id: string;
  action: string;
  amount: number;
  timestamp: number;
  currency: string;
  description: string;
  accountId: string;
};
export type TransactionState = {
  transactionById: ByIdType<TransactionData>;
};

let initialState: TransactionState = {
  transactionById: {},
};

const slice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    "fetch/fulfilled"(state, action: PayloadAction<ByIdType<TransactionData>>) {
      state.transactionById = {
        ...state.transactionById,
        ..._.keyBy(action.payload, "id"),
      };
    },
    "create/fetch/fulfilled"(state, action: PayloadAction<TransactionData>) {
      state.transactionById[action.payload.id] = action.payload;
    },
  },
});

export const {
  "fetch/fulfilled": setTransactionData,
  "create/fetch/fulfilled": addTransactionData,
} = slice.actions;

export default slice.reducer;
