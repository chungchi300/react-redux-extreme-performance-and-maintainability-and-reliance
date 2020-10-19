
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import clicksReducer from '../slices/counter';
import transaction from '../slices/transaction';
import account from '../slices/account';
import currentAccount from '../slices/currentAccount';
import modal from '../slices/modal';
import network from './networkReducer';
function domain(previousState:any, action:any){
  if(previousState==undefined){
    previousState = {
   
      transactionById: {},
      accountById:{
       
      }
    }
  }
  return {
    transactionById:transaction(previousState.transactionById,action),
    accountById:account(previousState.accountById,action)
  }
}
const reducers = { count: clicksReducer,domain:domain,currentAccount,modal ,network};

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
