import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Info from "./Pages/Info.jsx";
import Plan from "./Pages/Plan.jsx";
import Addons from "./Pages/Addons.jsx";
import Summary from "./Pages/Summary.jsx";
import Thanks from "./Pages/Thanks.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/info" />} />
        <Route exact path="/info" element={<Info />} />
        <Route exact path="/plan" element={<Plan />} />
        <Route exact path="/addons" element={<Addons />} />
        <Route exact path="/summary" element={<Summary />} />
        <Route exact path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
