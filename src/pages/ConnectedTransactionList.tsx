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

type Props = {
  data: any;
  accountById: any;
};

function TransactionList(props: any) {
  const { transactions, accountById } = props;
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

      {transactions.map((data: any) => {
        return <Transaction accountById={accountById} data={data} />;
      })}
    </Table>
  );
}
function mapStateToProps(state: RootState) {
  let transactions = Object.values(state.domain.transactionById).filter(
    (transaction) => transaction
  );
  return {
    accountById: state.domain.accountById,
    transactions: transactions,
  };
}

export const ConnectedTransactionList = connect(mapStateToProps)(
  TransactionList
);
