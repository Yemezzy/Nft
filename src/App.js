import { Routes, Route } from "react-router-dom";
import "./App.css";
import GenerateCode from "./Frontend/GenerateCode";
import StartPage from "./Frontend/StartPage";
import FontPage from "./Frontend/FontPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GenerateCode />} />
        <Route path="/Home" element={<FontPage />} />
      </Routes>
      {/* <StartPage /> */}
    </div>
  );
}

export default App;
