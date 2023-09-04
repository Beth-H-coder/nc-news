import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<Home />} />
          <Route path="/all-articles" element={<AllArticles />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
