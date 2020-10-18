import * as React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';

type Props = {
  currentAccountId: any;
  accountById:any;
  onChange:any;
};

export function CurrentAccount({ onChange,currentAccountId,accountById}:Props) {

  return (
         <div>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currentAccountId}
          onChange={onChange}
        >
            {Object.values(accountById).map((account:any)=>  <MenuItem value={account.id}>{account.name}</MenuItem>)}
  
        </Select>
        
         </div>  
         );
};
