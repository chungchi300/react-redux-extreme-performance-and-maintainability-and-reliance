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
import { setCurrentAccountId } from "../slices/currentAccount";

type Props = {
  data: any;
  accountById: any;
};

function TransactionList(props: any) {
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
    transactionById: state.domain.transactionById,
    accountById: state.domain.accountById,
    currentAccount: state.currentAccount,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setCurrentAccountId: (currentAccountId: number) => {
      dispatch(setCurrentAccountId(currentAccountId));
    },
  };
}

export const ConnectedCurrentAccount = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);
