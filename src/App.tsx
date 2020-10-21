import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";

import "./App.css";

import { ConnectedCurrentAccount } from "./pages/ConnectedCurrentAccount";
import { ConnectedTransactionList } from "./pages/ConnectedTransactionList";
import { ConnectedModalBankTransferForm } from "./pages/ConnectedModalBankTransferForm";
import { networkSaga } from "./sagas";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "INIT_LOAD_START" });

  }, []);


  return (
    <div className="App">
      <header className="App-header">
        
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
