import * as React from "react";
import { WithChildren } from "../helpers/withchildren";
import { TransactionData } from "../slices/transaction";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Transaction } from "../components/Transaction";
import { connect, useSelector } from "react-redux";
import { RootState } from "../reducer/rootReducer";
import { CurrentAccount } from "../components/CurrentAccount";
import { CurrentAccountState, setCurrentAccountId } from "../slices/currentAccount";
import { AccountData } from "../slices/account";

type Props = {
  currentAccount: CurrentAccountState;
  setCurrentAccountId: (event:any)=> any;
  accountById: {[id: string]:AccountData};
};

function TransactionList(props: Props) {
  return (
    <CurrentAccount
      onChange={(event: any) => {
        props.setCurrentAccountId(event.target.value);
      }}
      currentAccountId={
        props.currentAccount.selectedId ? props.currentAccount.selectedId : ""
      }
      accountById={props.accountById}
    />
  );
}

function mapStateToProps(state: RootState) {
  return {
    transactionById: state.transaction.transactionById,
    accountById: state.account.accountById,
    currentAccount: state.currentAccount,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCurrentAccountId: (currentAccountId: string) => {
      dispatch(setCurrentAccountId(currentAccountId));
    },
  };
}

export const ConnectedCurrentAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);
