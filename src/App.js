import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";
import Guide from "./components/Guide";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="appBody">
      <Nav />
      <Carousel />
      <Guide />
      <Stories />
    </div>
  );
}

export default App;
