import React, { Component, useState, useEffect } from "react";
import PicDay from "./components/PicDay";
import "./App.css";

function App () {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src="../public/logo192" alt="nasa logo" />
        <h1>NASA Picture of the Day</h1>
        <PicDay />
      </div>
    </div>
  );
}

export default App;