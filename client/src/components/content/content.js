import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "../contacts";
import Help from "../help";
import Reviews from "../reviews";
import Parts from "../parts";
import Watersave from "../watersave";
import Home from "../home";

const Content = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/parts" element={<Parts />}></Route>
        <Route path="/watersave" element={<Watersave />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Content;
