import * as React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
type Props = {
  currentAccountId: any;
  accountById: any;
  onChange: any;
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
}));
export function CurrentAccount({
  onChange,
  currentAccountId,
  accountById,
}: Props) {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="label">Filter By Account Type</InputLabel>
      <Select labelId="label" value={currentAccountId} onChange={onChange}>
        <MenuItem value={undefined}>All</MenuItem>
        {Object.values(accountById).map((account: any) => (
          <MenuItem key={account.id} value={account.id}>
            {account.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
