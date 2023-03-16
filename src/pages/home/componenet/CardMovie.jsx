import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const CardMovie = ({ Poster, year, type, title, id }) => {
  const theme = useTheme();
  const CardContentStyle = styled(CardContent)`
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    background-color: ${theme.palette.background.cardContent};
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease-in-out;
  `;
  const CardStyle = styled(Card)`
    height: 450px;
    position: relative;
    box-shadow: ${theme.shadows[5]};
    :hover .MuiCardContent-root {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  const Navigate = useNavigate();
  return (
    <>
      <CardActionArea>
        <CardStyle onClick={() => Navigate(`/movie/${id}`)}>
          <CardMedia sx={{ height: "100%" }} image={Poster} />
          <CardContentStyle>
            <Typography color="text.primary" variant="h6" fontWeight="bold">
              {title}
            </Typography>
            <Typography color="text.primary" variant="h6">
              {type}
            </Typography>
            <Typography color="text.primary" variant="h6">
              {year}
            </Typography>
          </CardContentStyle>
        </CardStyle>
      </CardActionArea>
    </>
  );
};

export default CardMovie;
