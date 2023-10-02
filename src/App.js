import { Routes, Route } from "react-router-dom";
import "./App.css";
import GenerateCode from "./Frontend/GenerateCode";
import StartPage from "./Frontend/StartPage";
import FontPage from "./Frontend/FontPage";
import About from "./Frontend/About";
// import Metamask from "./Frontend/Metamask";

function App() {





  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<GenerateCode />} />
        <Route path="/Home" element={<FontPage />} />
        <Route path="/bnb" element={<StartPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/*  /> */}
    </div>

  );
}

export default App;
