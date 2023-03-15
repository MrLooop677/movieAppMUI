import React from "react";
import SearchComp from "./componenet/SearchComp";
import { Box } from "@mui/material";
import FoundedMovies from "./componenet/FoundedMovies";
import { SearchContextProvider } from "../../context/searchContext";

const Home = () => {
  return (
    <Box>
      <SearchContextProvider>
        <SearchComp />
        <FoundedMovies />
      </SearchContextProvider>
    </Box>
  );
};

export default Home;
