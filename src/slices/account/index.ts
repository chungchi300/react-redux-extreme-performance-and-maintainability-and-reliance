import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import _ from "lodash";

type Account = {
  id:number;
  name:string;
};
type AccountState = {
  accountById: {[id: string]: Account}
};

let initialState: AccountState = {
  accountById: {},
}

const slice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setData(state, action:any) {
      state.accountById = {...state.accountById,... _.keyBy(action.payload.data, "id")}; 
    },
  }
})

export const {
  setData,
 
} = slice.actions

export default slice.reducer
