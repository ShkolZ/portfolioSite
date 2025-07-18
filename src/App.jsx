import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Overview from "./components/Overview";
import Contact from "./components/Contact";
import Information from "./components/Information";

function App() {
  return (
    <main className="flex flex-wrap mr-2 ml-2 mt-4 justify-evenly">
      <section className="lg:w-30/100 md:w-45/100 w-9/10 ">
        <Profile />
        <Projects />
      </section>
      <section className="lg:w-33/100 md:w-45/100 w-9/10 ">
        <Skills />
        <Contact />
        <Information />
      </section>
      <section className="lg:w-33/100 md:w-94/100 w-9/10">
        <Overview />
      </section>
    </main>
  );
}

export default App;
