import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{ bgcolor: "background.header", color: "#fff", padding: 1 }}
        component="header"
      >
        <Container>
          <Grid
            container
            justifyContent={matches ? "center" : "space-between"}
            alignItems="center"
          >
            <Grid item>
              <Typography
                color="primary"
                sx={{ textDecoration: "none" }}
                as={Link}
                to="/"
                variant="h4"
                component="p"
              >
                Movie App
              </Typography>
            </Grid>
            <Grid item>
              <Grid container spacing={2} alignItems="center">
              

                <Grid item>
                <Typography
                color="primary"
                sx={{ textDecoration: "none" }}
                as={Link}
                to="/favpage"
                variant="h5"
                component="p"
              >
                Favorite Films
              </Typography>
                </Grid>

                <Grid item>
              <Avatar
                sx={{ width: 60, height: 60 }}
                src="https://pbs.twimg.com/profile_images/615688210841255936/lC0QQUKr_400x400.jpg"
                alt="movie-avatar"
                />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
