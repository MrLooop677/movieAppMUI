import { Grid } from "@mui/material";
import React from "react";
import MovieDetails from "./component/MovieDetails";

const MovieInfo = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <MovieDetails />
        </Grid>
        <Grid item>
          <MovieDetails />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieInfo;
