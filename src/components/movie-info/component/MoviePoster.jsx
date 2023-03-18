import { Card, CardMedia, Fab } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { styled } from "@mui/material/styles";
const FabIconStyle = styled(Fab)`
  position: absolute;
  top: 10px;
  left: 10px;
`;
const MoviePoster = ({ Poster,isFav  }) => {
  return (
    <Card raised sx={{ position: "relative" }}>
      <FabIconStyle color="primary" aria-label="add">
        {isFav?<FavoriteIcon/>:<FavoriteBorderIcon />}
      </FabIconStyle>
      <CardMedia component="img" image={`${Poster}`} />
    </Card>
  );
};

export default MoviePoster;
