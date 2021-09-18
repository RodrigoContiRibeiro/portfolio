import React from "react";
import Header from "./components/Header";
import StartTextAnimaton from "./components/StartTextAnimation";
import "./fontFaces.css";

function App() {
  return (
    <>
      <StartTextAnimaton>
        <Header />
      </StartTextAnimaton>
    </>
  );
}

export default App;
