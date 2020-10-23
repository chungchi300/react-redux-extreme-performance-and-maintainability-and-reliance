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
import { getLoading } from "../helpers/network";
import { AccountData } from "../slices/account";
import { LoadingState } from "../reducer/networkReducer";

type Props = {
  network: LoadingState;
  transactions: TransactionData[];
  accountById: { [id: string]: AccountData };
};

function TransactionList(props: Props) {
  const { transactions, accountById } = props;
  let loading = getLoading(props.network, ["transaction", "account"]);
  if (loading) return loading;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
          <TableCell>Action</TableCell>
          <TableCell>Timestamp</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Account</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transactions.map((data: TransactionData) => {
          return (
            <Transaction key={data.id} accountById={accountById} data={data} />
          );
        })}
      </TableBody>
    </Table>
  );
}
function mapStateToProps(state: RootState) {
  let transactions = Object.values(
    state.transaction.transactionById
  ).filter((transaction: TransactionData) =>
    state.currentAccount.selectedId
      ? transaction.accountId == state.currentAccount.selectedId
      : true
  );

  return {
    accountById: state.account.accountById,
    transactions: transactions,
    network: state.network,
  };
}

export const ConnectedTransactionList = connect(mapStateToProps)(
  TransactionList
);
