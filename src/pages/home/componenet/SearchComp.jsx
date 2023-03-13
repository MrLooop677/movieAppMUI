import { Box, TextField } from "@mui/material";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import React from "react";

const SearchComp = () => {
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
        label="Standard"
        variant="standard"
        fullWidth
      />
    </Box>
  );
};

export default SearchComp;
