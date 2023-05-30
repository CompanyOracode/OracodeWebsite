import LogIn from "./components/LogIn";
import { Home } from "./components/Home";
//import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
