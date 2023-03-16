import { Card, CardMedia, Fab } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
const FabIconStyle = styled(Fab)`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const MoviePoster = ({ poster }) => {
  console.log(poster);
  return (
    <Card raised sx={{ position: "relative" }}>
      <FabIconStyle color="primary" aria-label="add">
        <FavoriteBorderIcon />
      </FabIconStyle>
      <CardMedia component="img" image={`${poster}`} />
    </Card>
  );
};

export default MoviePoster;
