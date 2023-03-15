import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import CardMovie from "./CardMovie";
import { searchContext } from "../../../context/searchContext";
import { Typography } from "@mui/material";
import Loader from "../../../components/Loader";
import ErrorComp from "../../../components/ErrorComp";

const FoundedMovies = () => {
  const { films, isLoad, isError } = useContext(searchContext);
  const cardFilms =
    films.length > 0 ? (
      films.map((film) => (
        <Grid item xs={12} sm={6} md={3} key={film.imdbID}>
          <CardMovie
            Poster={film.Poster}
            year={film.Year}
            type={film.Type}
            title={film.Title}
            id={film.imdbID}
          />
        </Grid>
      ))
    ) : (
      <Typography variant="h2">Not Films Exist</Typography>
    );
  return (
    <div>
      <Grid container spacing={2}>
        {isLoad && <Loader />}
        {isError && <ErrorComp error={isError} />}
        {cardFilms}
      </Grid>
    </div>
  );
};

export default FoundedMovies;
