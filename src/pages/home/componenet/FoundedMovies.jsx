import React from "react";
import Grid from "@mui/material/Grid";
import CardMovie from "./CardMovie";

const FoundedMovies = () => {
  return (
    <div>
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
    </div>
  );
};

export default FoundedMovies;
