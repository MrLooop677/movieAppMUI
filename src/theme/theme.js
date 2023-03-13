import { createTheme } from "@mui/material";
import { darkShadows, lightShadows } from "./shadows";
import { darkModePalette, lightModePalette } from "./pallet";

export const lightTheme = createTheme({
  palette: lightModePalette,
  shadows: lightShadows,
});
export const darkTheme = createTheme({
  palette: darkModePalette,
  shadows: darkShadows,
});
