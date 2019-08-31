import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";

function App() {
  return (
    //<div className="App">
    <div className="container">
      <Nav />
      <Carousel />
    </div>

    //</div>
  );
}

export default App;
