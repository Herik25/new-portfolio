import { Dock, Navbar, Welcome } from "#components";
import React from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { Finder, Resume, Safari, Terminal } from "#windows";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </div>
  );
}

export default App;
