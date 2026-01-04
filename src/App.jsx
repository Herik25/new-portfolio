import { Dock, Navbar, Welcome } from "#components";
import React from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import {
  Contact,
  Finder,
  ImageWindow,
  Photos,
  Resume,
  Safari,
  Terminal,
  Text,
} from "#windows";
import Home from "#windows/Home";

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
      <Text />
      <ImageWindow />
      <Contact />
      <Home />
      <Photos />
    </div>
  );
}

export default App;
