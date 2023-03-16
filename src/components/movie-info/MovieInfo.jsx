import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieDetails from "./component/MovieDetails";
import { useParams } from "react-router-dom";
import MoviePoster from "./component/MoviePoster";
import { fetchData } from "../../Hooks/UseFetchData";

const MovieInfo = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState({});

  const getDetailFilm = async () => {
    const res = await fetchData(`i=${id}`);
    setFilmDetail(res);
  };
  useEffect(() => {
    getDetailFilm();
  }, []);
  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={5}>
          <MoviePoster poster={filmDetail.Poster} />
        </Grid>
        <Grid item md={7}>
          <MovieDetails filmDetail={filmDetail} />
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieInfo;
