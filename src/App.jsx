import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Overview from "./components/Overview";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="flex flex-wrap mr-2 ml-2 mt-4 justify-evenly">
      <section className="lg:w-30/100 md:w-45/100 w-9/10 ">
        <Profile />
        <Projects />
      </section>
      <section className="lg:w-33/100 md:w-45/100 w-9/10 ">
        <Skills />
        <Overview />
        <Contact />
      </section>
      <section className="lg:w-33/100 w-9/10 border"></section>
    </main>
  );
}

export default App;
