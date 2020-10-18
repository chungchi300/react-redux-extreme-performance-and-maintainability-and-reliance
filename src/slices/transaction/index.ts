import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import _ from "lodash";

export type TransactionData = {
  id:number;
  action:string;
  amount:string;
  timestamp:number;
  currency:string;
  description:string;
  accountId:number;
};
type TransactionState = {
  transactionById: {[id: string]: TransactionData}
};

let initialState: TransactionState = {
  transactionById: {},
}

const slice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setData(state, action:any) {
      state.transactionById = {...state.transactionById,... _.keyBy(action.payload.data, "id")}; 
    },
  }
})

export const {
  setData,
 
} = slice.actions

export default slice.reducer
