import * as React from "react";
import { WithChildren } from "../helpers/withchildren";
import { TransactionData } from "../slices/transaction";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { AccountData } from "../slices/account";

type Props = {
  data: TransactionData;
  accountById: { [id: string]: AccountData };
};
var objectPoolDate = new Date();
export function Transaction({ data, accountById }: Props) {
  objectPoolDate.setTime(data.timestamp);

  return (
    <TableRow key={data.id}>
      <TableCell>{data.amount}</TableCell>
      <TableCell>{data.currency}</TableCell>
      <TableCell>{data.action}</TableCell>

      <TableCell>{objectPoolDate.toTimeString()}</TableCell>
      <TableCell>{data.description}</TableCell>
      <TableCell>{accountById[data.accountId].name} </TableCell>
    </TableRow>
  );
}
