import { Dock, Navbar, Welcome } from "#components";
import React from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { Resume, Safari, Terminal } from "#windows";

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
    </div>
  );
}

export default App;
