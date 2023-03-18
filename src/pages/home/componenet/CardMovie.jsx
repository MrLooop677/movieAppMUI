import {
  CardActionArea,

} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardMovieReusable from "./CardMovieReusable";

const CardMovie = ({ Poster, year, type, title, id }) => {
  
  const Navigate = useNavigate();
  return (
    <>
      <CardActionArea onClick={() => Navigate(`/movie/${id}`)}>
        <CardMovieReusable Poster={Poster} year={year} type={type} title={title} id={id} />
      </CardActionArea>
    </>
  );
};

export default CardMovie;
