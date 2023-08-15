import { useState } from "react";
import reactLogo from "./assets/react.svg";
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
    </>
  );
}

export default App;
