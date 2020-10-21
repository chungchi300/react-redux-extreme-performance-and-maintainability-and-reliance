import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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