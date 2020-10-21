import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import _ from "lodash";

export type AccountData = {
  id: string;
  name: string;
};
export type AccountState = {
  accountById: { [id: string]: AccountData };
};

let initialState: AccountState = {
  accountById: {},
};

const slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    ["fetch/fulfilled"](state, action: any) {
      state.accountById = {
        ...state.accountById,
        ..._.keyBy(action.payload, "id"),
      };
    },
  },
});

export const { ["fetch/fulfilled"]: setAccountData } = slice.actions;

export default slice.reducer;
