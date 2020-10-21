import * as React from "react";
import { WithChildren } from "../helpers/withchildren";
import { TransactionData } from "../slices/transaction";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { makeStyles } from "@material-ui/core/styles";

import TableRow from "@material-ui/core/TableRow";
import { Transaction } from "../components/Transaction";
import { connect, useSelector } from "react-redux";
import { RootState } from "../reducer/rootReducer";
import { CurrentAccount } from "../components/CurrentAccount";
import { setCurrentAccountId } from "../slices/currentAccount";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

import Modal from "@material-ui/core/Modal";
import { setModal } from "../slices/modal";
import { Form, Field } from "react-final-form";
import { networkSaga } from "../sagas";
const required = (value: any) => (value ? undefined : "Required");
const mustBeNumber = (value: number) =>
  isNaN(value) ? "Must be a number" : undefined;
const minValue = (min: number) => (value: number) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators = (...validators: any) => (value: any) =>
  validators.reduce(
    (error: any, validator: any) => error || validator(value),
    undefined
  );

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  innerWrapper: {
    background: "white",
    margin: "30px",
    padding: "30px",
    position: "fixed",
  },
  fieldError: {
    color: "red",
    marginTop: "5px",
    display: "block",
    marginBottom: "5px",
  },
}));

function ModalBankTransferForm(props: any) {
  const classes = useStyles();
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={() => {
          props.toggleModal(props.open);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.innerWrapper}>
            <Form
              onSubmit={(values) => {
                props.submitTransferForm(values);
            
              }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="amount"
                    validate={composeValidators(
                      required,
                      mustBeNumber,
                      minValue(0)
                    )}
                  >
                    {({ input, meta }) => (
                      <div>
                        <label>Amount</label>
                        <input {...input} type="text" placeholder="Amount" />
                        {meta.error && meta.touched && (
                          <span className={classes.fieldError}>
                            {meta.error}
                          </span>
                        )}
                      </div>
                    )}
                  </Field>
                  From
                  <Field name="sourceAccountId" component="select">
                    <option key={""} value={""}>
                      Select
                    </option>
                    {props.accounts.map((account: any) => {
                      return (
                        <option key={account.id} value={account.id}>
                          {account.name}
                        </option>
                      );
                    })}
                  </Field>
                  {values.sourceAccountId ? (
                    <div>
                      to
                      <Field name="targetAccountId" component="select">
                        {props.accounts.map((account: any) => {
                          return (
                            <option
                              disabled={values.sourceAccountId == account.id}
                              key={account.id}
                              value={account.id}
                            >
                              {account.name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  ) : null}
                  <div className="buttons">
                    <button type="submit" disabled={submitting}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        props.toggleModal(props.open);
                      }}
                      disabled={submitting || pristine}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

function mapStateToProps(state: RootState) {
  console.log({state});
  return {
    open: state.modal.name == "bankTransfer",
    accounts: Object.values(state.account.accountById),
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
    submitTransferForm: (values: any) => {
      dispatch(networkSaga.actions.createTransaction("testing"));
    },
  };
}
export const ConnectedModalBankTransferForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalBankTransferForm);
