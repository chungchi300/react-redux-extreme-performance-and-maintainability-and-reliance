import { all, call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setAccountData } from "../slices/account";
import { addCount } from "../slices/counter";
import { addTransactionData, setTransactionData } from "../slices/transaction";
import { createSliceSaga, SagaType } from "redux-toolkit-saga";
import { PayloadAction } from "@reduxjs/toolkit";

export const networkSaga = createSliceSaga({
  name: "network",

  caseSagas: {
    *createTransaction (action: PayloadAction<string>) {
      console.log('action clicked');
  

      // yield put({ type: "transaction/create/fetch/pending" });
      // yield delay(1000);
      
      yield put(addTransactionData( {
        id: 't7',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a2',
      },));
      console.log('netxt')
   
    },

  },
  sagaType: SagaType.Watch,
});



export function* loadTransaction() {
  yield put({ type: "transaction/fetch/pending" });
  yield delay(1000);
  yield put(
    setTransactionData({
      't1': {
        id: 't1',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a1',
      },
      't2': {
        id: 't2',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a1',
      },
      't3': {
        id: 't3',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a1',
      },
      't4': {
        id: 't4',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a1',
      },
      't5': {
        id: 't5',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a2',
      },
      't6': {
        id: 't6',
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 'a2',
      },
    })
  );
}

export function* watchLoadTransactionData() {
  yield takeEvery("LOAD_TRANSACTION_START", loadTransaction);
}

export function* loadAccount() {
  yield put({ type: "account/fetch/pending" });
  yield delay(1000);
  yield put(
    setAccountData({
      'a1': {
        id: 'a1',
        name: "saving",
      },
      'a2': {
        id: 'a2',
        name: "investment",
      },
    })
  );
}

export function* watchLoadAccount() {
  yield takeLatest("LOAD_ACCOUNT_START", loadTransaction);
}
export function* initLoad() {
  yield call(loadAccount);
  yield call(loadTransaction);
}
export function* watchInitLoad() {
  yield takeLatest("INIT_LOAD_START", initLoad);
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(networkSaga.saga),
    
    call(watchLoadTransactionData),
    call(watchLoadAccount),
    call(watchInitLoad),
  ]);
}
