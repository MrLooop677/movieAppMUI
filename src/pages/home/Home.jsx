import React from "react";
import SearchComp from "./componenet/SearchComp";
import { Box } from "@mui/material";
import FoundedMovies from "./componenet/FoundedMovies";
import { SearchContextProvider } from "../../context/searchContext";

const Home = () => {
  return (
    <Box>
        <SearchComp />
        <FoundedMovies />
    </Box>
  );
};

export default Home;
