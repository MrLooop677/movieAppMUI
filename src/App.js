import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchMode from "./components/SwitchMode";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import { useState } from "react";
import { SearchContextProvider } from "./context/searchContext";
import { FavContextProvider } from "./context/favContext";


function App() {
  const [isDarkMode,setDarkMode]=useState(false)
  return (
    <ThemeProvider theme={isDarkMode?darkTheme:lightTheme}>
      <Box sx={{bgcolor:"background.body",minHeight:"100vh"}}>
      <Header/>
      <Container>
      <SwitchMode isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
      <SearchContextProvider>
      <FavContextProvider>
      <Outlet/>
      </FavContextProvider>
      </SearchContextProvider>


      </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
