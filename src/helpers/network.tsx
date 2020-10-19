import CircularProgress from "@material-ui/core/CircularProgress";

import * as React from "react";
export function getLoading(networkState: any, routes: any) {
  let anyLoading = false;
  for (let route of routes) {
    if (networkState[route + "/fetch"] != "fulfilled") {
      anyLoading = true;
    }
  }

  if (anyLoading) {
    return <CircularProgress />;
  } else {
    return null;
  }
}
