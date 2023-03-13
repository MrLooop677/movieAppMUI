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

const CardMovie = () => {
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
  return (
    <>
      <CardActionArea>
        <CardStyle>
          <CardMedia
            sx={{ height: "100%" }}
            image="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg"
          />
          <CardContentStyle>
            <Typography color="text.primary" variant="h6" fontWeight="bold">
              Title
            </Typography>
            <Typography color="text.primary" variant="h6">
              Type
            </Typography>
            <Typography color="text.primary" variant="h6">
              30-5-2020
            </Typography>
          </CardContentStyle>
        </CardStyle>
      </CardActionArea>
    </>
  );
};

export default CardMovie;
