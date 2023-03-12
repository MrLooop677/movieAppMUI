import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchMode from "./components/SwitchMode";


function App() {
  return (
    <div className="App">
      <Header/>
      <SwitchMode/>
      <Outlet/>
    </div>
  );
}

export default App;
