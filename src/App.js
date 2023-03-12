import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchMode from "./components/SwitchMode";
import { Container } from "@mui/material";


function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <SwitchMode/>
      <Outlet/>

      </Container>
    </div>
  );
}

export default App;
