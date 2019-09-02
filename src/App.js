import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Guide from "./components/Guide";
import Stories from "./components/Stories";

function App() {
  return (
    //<div className="App">
    <div className="appBody">
      <Nav />
      <Carousel />
      <Guide />
      <Stories />
    </div>

    //</div>
  );
}

export default App;
