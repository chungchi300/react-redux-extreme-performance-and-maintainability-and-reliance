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
import Modal from "@material-ui/core/Modal";
import { setModal } from "../slices/modal";

function ModalBankTransferForm(props: any) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          props.toggleModal(props.open);
        }}
      >
        Transfer Money To Other Account
      </button>
      <Modal
        open={props.open}
        onClose={() => {
          props.toggleModal(props.open);
        }}
      >
        <div>Modal Content</div>
      </Modal>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    open: state.modal.name == "bankTransfer",
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    toggleModal: (currentModalOpen: boolean) => {
      if (currentModalOpen) {
        dispatch(setModal({ name: undefined, props: null }));
      } else {
        dispatch(setModal({ name: "bankTransfer" }));
      }
    },
  };
}
export const ConnectedModalBankTransferForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBankTransferForm);
