import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import LastCommit from "./components/LastCommit";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      Last Update:
      <LastCommit />
      <Navbar />
      <Hero />
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
    </div>
  );
};

export default App;
