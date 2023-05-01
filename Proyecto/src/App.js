import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import PostForm from "./components/PostForm/PostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Login from "./components/Login/Login";

function App() {
  const [update, setUpdate] = useState(false);

  const updatePets = () => {
    setUpdate(!update);
  };

  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<Home update={update} />} />
          <Route
            path="/new_pet"
            element={<PostForm updatePets={updatePets} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
