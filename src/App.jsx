import React from "react";
import Login from "./components/login/Login";
import ImageGallery from "./components/imgGrid/ImageGrid";
import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <Routes>
     <Route path="/" element={<Login/>}/>
     <Route path="/gallery" element={<ImageGallery/>}/>
    </Routes>
  );
};

export default App;
