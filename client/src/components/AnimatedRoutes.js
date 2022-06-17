import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Update from "../pages/Update";
import New from "../pages/New";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/New" element={<New />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;