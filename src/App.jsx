import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LastCommit from "./components/LastCommit";
import About from "./sections/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <LastCommit />
      <Navbar />
      <Hero />
      <About />
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
    </div>
  );
};

export default App;
