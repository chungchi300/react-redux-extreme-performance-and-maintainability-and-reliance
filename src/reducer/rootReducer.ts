
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'

import clicksReducer from '../slices/counter';
import transaction from '../slices/transaction';
import account from '../slices/account';
import currentAccount from '../slices/currentAccount';
import modal from '../slices/modal';
function domain(previousState:any, action:any){
  if(previousState==undefined){
    previousState = {
   
      transactionById: {
       1: {
          id:1,
          action:'deposit',
          amount:1000,
          timestamp:10001000,
          currency:'HKD',
          description:'First Deposit',
          accountId:1,
        },
        2: {
          id:2,
          action:'deposit',
          amount:1000,
          timestamp:10001000,
          currency:'HKD',
          description:'First Deposit',
          accountId:1,
        },
        3: {
          id:3,
          action:'deposit',
          amount:1000,
          timestamp:10001000,
          currency:'HKD',
          description:'First Deposit',
          accountId:1,
        },
        4: {
          id:4,
          action:'deposit',
          amount:1000,
          timestamp:10001000,
          currency:'HKD',
          description:'First Deposit',
          accountId:1,
        },
        5: {
          id:5,
          action:'deposit',
          amount:1000,
          timestamp:10001000,
          currency:'HKD',
          description:'First Deposit',
          accountId:2,
        },
        6: {
          id:6,
          action:'deposit',
          amount:1000,
          timestamp:10001000,
          currency:'HKD',
          description:'First Deposit',
          accountId:2,
        },
      },
      accountById:{
        1: {
          id:1,
          name:"saving"
        },
        2: {
          id:2,
          name:"investment"
        },
      }
    }
  }
  return {
    transactionById:transaction(previousState.transactionById,action),
    accountById:account(previousState.accountById,action)
  }
}
const reducers = { count: clicksReducer,domain:domain,currentAccount,modal };

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
