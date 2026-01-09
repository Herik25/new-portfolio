import useWindowStore from "#store/window";
import { Minus, Plus, X } from "lucide-react";
import React from "react";

function WindowControls({ target }) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls" className="group flex gap-2">
      <div
        className="close grid place-items-center hover:scale-120 transition-transform duration-400"
        onClick={() => closeWindow(target)}
      >
        <X
          size={9}
          className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          strokeWidth={3}
        />
      </div>
      <div className="minimize grid place-items-center hover:scale-120 transition-transform duration-400">
        <Minus
          size={9}
          className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          strokeWidth={3}
        />
      </div>
      <div className="maximize grid place-items-center hover:scale-120 transition-transform duration-400">
        <Plus
          size={9}
          className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          strokeWidth={3}
        />
      </div>
    </div>
  );
}

export default WindowControls;
