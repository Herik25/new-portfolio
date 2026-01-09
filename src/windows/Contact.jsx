import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

function Contact() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-2">
        <img
          src="/images/harsh.jpg"
          alt="Harsh"
          className="w-20 h-20 object-cover rounded-3xl"
        />
        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? or just wanna talk tech? I'm in.</p>
        <a href="mailto:harshparmar87990@gmail.com" className="text-blue-400 underline">harshparmar87990@gmail.com</a>

        <ul className="mt-4">
          {socials.map((item) => (
            <li key={item.id} style={{ background: item.bg }}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.text}
              >
                <img src={item.icon} alt={item.text} className="size-5" />
                <p>{item.text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const Contactwindow = WindowWrapper(Contact, "contact");

export default Contactwindow;
