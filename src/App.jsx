import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DataInput from "./pages/DataInput.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/data-input" element={<DataInput />} />
      </Routes>
    </Router>
  );
}

export default App;
