import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import _ from "lodash";

export type TransactionData = {
  id:string;
  action:string;
  amount:string;
  timestamp:number;
  currency:string;
  description:string;
  accountId:string;
};
type TransactionState = {
  transactionById: any
};

let initialState: TransactionState = {
  transactionById: {},
}

const slice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    ["fetch/fulfilled"](state,action:any){
      state.transactionById = {...state.transactionById,... _.keyBy(action.payload  , "id")}; 

    },
    ["create/fetch/fulfilled"](state,action:any){
      state.transactionById[action.payload.id] = action.payload;
    }
  }
})

export const {
  ["fetch/fulfilled"]: setTransactionData,
  ["create/fetch/fulfilled"]: addTransactionData,
} = slice.actions

export default slice.reducer
