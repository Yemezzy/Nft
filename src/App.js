import { Routes, Route } from "react-router-dom";
import "./App.css";
import GenerateCode from "./Frontend/GenerateCode";
import StartPage from "./Frontend/StartPage";
import FontPage from "./Frontend/FontPage";
import About from "./Frontend/About";
import Calculator from "./Frontend/Calculator";
import GetStarted from "./Frontend/GetStarted";
import Dropmenu from "./Frontend/Dropmenu";
import Testimonials from "./Frontend/Testimonials";
// import Metamask from "./Frontend/Metamask";

function App() {





  return (
    <div className="App">
      <Routes>
        <Route path="/generate-staking-wallet" element={<GenerateCode />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/Home" element={<FontPage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Dropmenu" element={<Dropmenu />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
      {/*  /> */}
    </div>
  );
}

export default App;
