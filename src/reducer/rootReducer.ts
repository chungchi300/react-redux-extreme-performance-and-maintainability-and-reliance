
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import clicksReducer from '../slices/counter';
import transaction from '../slices/transaction';
import account from '../slices/account';
import currentAccount from '../slices/currentAccount';
import modal from '../slices/modal';
import network from './networkReducer';

const reducers = { count: clicksReducer,currentAccount,modal,transaction,account ,network};

export let rootReducer = combineReducers({
  ...reducers
})

export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({
    ...reducers,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>
