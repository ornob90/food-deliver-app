import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
    </>
  );
}

export default App;
