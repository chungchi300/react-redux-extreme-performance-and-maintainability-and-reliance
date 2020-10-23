import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ByIdType } from "../../helpers/type";
import _ from "lodash";

export type AccountData = {
  id: string;
  name: string;
};

export type AccountState = {
  accountById: ByIdType<AccountData>;
};

let initialState: AccountState = {
  accountById: {},
};

const slice = createSlice({
  name: "account",
  initialState,
  reducers: {
    "fetch/fulfilled"(state, action: PayloadAction<ByIdType<AccountData>>) {
      state.accountById = {
        ...state.accountById,
        ..._.keyBy(action.payload, "id"),
      };
    },
  },
});

export const { "fetch/fulfilled": setAccountData } = slice.actions;

export default slice.reducer;
