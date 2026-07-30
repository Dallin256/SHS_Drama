// react imports
import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//component imports
import Header from "./Header/Header.jsx";
import Main from "./Main.jsx";

//constants
import { api, auth } from "../utils/constants.js";

//app function
export default function App() {
  return (
    <>
      <Header></Header>
    </>
  );
}
