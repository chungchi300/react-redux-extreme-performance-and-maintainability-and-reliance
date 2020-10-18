import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import _ from "lodash";

type ModalState = {
  name:string | null | undefined;
  props:any
};

let initialState: ModalState = {
  name:undefined,
  props:null
}

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal(state,action) {
      return {
        name:action.payload.name,
        props:action.payload.props
      }
    },
  }
})

export const {
  setModal,
 
} = slice.actions

export default slice.reducer
