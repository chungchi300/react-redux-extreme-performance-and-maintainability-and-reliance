import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./reducer/rootReducer";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import { addCount, minusCount } from "./slices/counter";
import "./App.css";
import { Transaction } from "./components/Transaction";
import { TransactionData } from "./slices/transaction";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ConnectedCurrentAccount } from "./pages/ConnectedCurrentAccount";
import { ConnectedTransactionList } from "./pages/ConnectedTransactionList";
import { ConnectedModalBankTransferForm } from "./pages/ConnectedModalBankTransferForm";

export const incrementAsync = () => ({
  type: "INCREMENT_ASYNC",
});

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "INIT_LOAD_START" });
  }, []);

  const { clicks } = useSelector((state: RootState) => state.count);
  const domain = useSelector((state: RootState) => state.domain);
  const currentAccount = useSelector(
    (state: RootState) => state.currentAccount
  );
  const increment = (page: number) => {
    dispatch(addCount(page));
  };

  const decrement = (page: number) => {
    dispatch(minusCount(page));
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter
            value={clicks}
            onIncrement={() => increment(1)}
            onDecrement={() => decrement(1)}
            onIncrementAsync={() => dispatch(incrementAsync())}
          /> */}
        <div>
          <ConnectedCurrentAccount />
          <ConnectedModalBankTransferForm />
        </div>

        <ConnectedTransactionList />
      </header>
    </div>
  );
}

export default App;
