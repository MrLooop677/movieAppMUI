import React from "react";
import CardMovie from "./CardMovie";
import { Box, Grid } from "@mui/material";

const FoundedMovies = () => {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CardMovie />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoundedMovies;
