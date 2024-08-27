import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoInfo from "./components/VideoInfo/VideoInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<VideoInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
