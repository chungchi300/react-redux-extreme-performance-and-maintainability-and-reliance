import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import { setAccountData } from "../slices/account";
import { addCount } from "../slices/counter";
import { setTransactionData } from "../slices/transaction";

export function* incrementAsync() {
  yield delay(1000);
  yield put(addCount(1));
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* loadTransaction() {
  yield put({ type: "transaction/fetch/pending" });
  yield delay(1000);
  yield put(
    setTransactionData({
      1: {
        id: 1,
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 1,
      },
      2: {
        id: 2,
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 1,
      },
      3: {
        id: 3,
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 1,
      },
      4: {
        id: 4,
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 1,
      },
      5: {
        id: 5,
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 2,
      },
      6: {
        id: 6,
        action: "deposit",
        amount: 1000,
        timestamp: 10001000,
        currency: "HKD",
        description: "First Deposit",
        accountId: 2,
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
      1: {
        id: 1,
        name: "saving",
      },
      2: {
        id: 2,
        name: "investment",
      },
    })
  );
}

export function* watchLoadAccount() {
  yield takeEvery("LOAD_ACCOUNT_START", loadTransaction);
}
export function* initLoad() {
  yield call(loadAccount);
  yield call(loadTransaction);
}
export function* watchInitLoad() {
  yield takeEvery("INIT_LOAD_START", initLoad);
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
    call(watchLoadTransactionData),
    call(watchLoadAccount),
    call(watchInitLoad),
  ]);
}
