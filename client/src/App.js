import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Update from "./pages/Update";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
