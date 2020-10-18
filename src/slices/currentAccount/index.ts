import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import _ from "lodash";

type CurrentAccountState = {
  selectedId:number | null | undefined;
};

let initialState: CurrentAccountState = {
  selectedId:undefined
}

const slice = createSlice({
  name: 'currentAccount',
  initialState,
  reducers: {
    setCurrentAccountId(state, action:any) {
      return {
        selectedId:action.payload
      }
    },
  }
})

export const {
  setCurrentAccountId,
 
} = slice.actions

export default slice.reducer
