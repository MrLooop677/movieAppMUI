import { Box, TextField } from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import React, { useContext } from "react";
import { searchContext } from "../../../context/searchContext";

const SearchComp = () => {
  const { setSearchWord } = useContext(searchContext);
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <SavedSearchIcon color="info" sx={{ mr: 1 }} fontSize="large" />
      <TextField
        id="standard-basic"
        label="Seacrh"
        variant="standard"
        fullWidth
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </Box>
  );
};

export default SearchComp;
