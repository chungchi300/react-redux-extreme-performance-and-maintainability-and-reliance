import { combineReducers } from "@reduxjs/toolkit";

import transaction from "../slices/transaction";
import account from "../slices/account";
import currentAccount from "../slices/currentAccount";
import modal from "../slices/modal";
import network from "./networkReducer";

const reducers = { currentAccount, modal, transaction, account, network };

export let rootReducer = combineReducers({
  ...reducers,
});

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...reducers,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
