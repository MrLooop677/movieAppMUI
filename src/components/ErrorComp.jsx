import { Alert, Grid } from "@mui/material";
import React from "react";

const ErrorComp = ({ error }) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12}>
        <Alert sx={{ width: "100%" }} severity="error">
          {error}!
        </Alert>
      </Grid>
    </Grid>
  );
};

export default ErrorComp;
