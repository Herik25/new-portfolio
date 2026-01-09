import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  PanelLeft,
  Plus,
  Search,
  Share,
  Shield,
  ShieldHalf,
} from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Neumorphic UI",
    description:
      "A modern React component library that brings the soft, tactile feel of neumorphism to your web applications. Built with React, TypeScript, and Tailwind CSS.",
    link: "https://www.npmjs.com/package/@harsh2505/neumorphic-ui",
    image: "/images/project-1.png",
    category: "NPM Library",
  },
  // {
  //   id: 2,
  //   title: "LeoBrain",
  //   description:
  //     "AI-powered hiring assistant that automates screening, scheduling, and shortlisting to streamline recruitment processes.",
  //   link: "https://www.leobrain.xyz/",
  //   image: "/images/project-2.png",
  //   category: "SaaS Product",
  // },
  {
    id: 3,
    title: "Faces Consent",
    description:
      "Comprehensive clinic management platform for the aesthetics industry, featuring paperless consents and booking systems.",
    link: "https://facesconsent.com/",
    image: "/images/project-3.png",
    category: "Healthcare Platform",
  },
];

function Safari() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
              defaultValue="harshparmar.netlify.app"
              disabled
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      {/* Safari Start Page Content */}
      <div className="safari-content h-full w-full overflow-y-auto bg-gray-100/90 relative font-sans">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-70 pointer-events-none"
          style={{
            backgroundImage: 'url("/images/safari-backgorund.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto p-8 md:p-12 pb-20 space-y-12">
          {/* Favorites Section */}
          <section className="grid place-items-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6 px-2">
              Favorites
            </h3>
            <div className="flex flex-wrap gap-x-8 gap-y-6">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 w-20"
                >
                  <div className={`w-16 h-16 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300`} style={{backgroundColor: item.browserBg}}>
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-8 h-8 opacity-90"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors text-center truncate w-full">
                    {item.text}
                  </span>
                </a>
              ))}
              <a
                href="mailto:harshparmar87990@gmail.com"
                className="group flex flex-col items-center gap-3 w-20"
              >
                <div className={`w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <img
                      src="/icons/gmail.svg"
                      alt="gmail"
                      className="w-8 h-8 opacity-90"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600 transition-colors text-center truncate w-full">
                    Gmail
                  </span>
              </a>
              <div className="group flex flex-col items-center gap-3 w-20 cursor-pointer">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <span className="text-xs font-medium text-gray-500">Add</span>
              </div>
            </div>
          </section>

          {/* Privacy Report */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4 px-2">
              Privacy Report
            </h3>
            <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-xl p-5 shadow-sm flex items-center gap-5 max-w-md cursor-default">
              <div className="bg-blue-500 p-3 rounded-lg shadow-md shadow-blue-200">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-lg">
                  0 Trackers Prevented
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  Your IP address was hidden from known trackers.
                </p>
              </div>
            </div>
          </section>

          {/* Siri Suggestions (Projects) */}
          <section>
            <h3 className="text-xl font-bold text-gray-800 mb-6 px-2">
              Siri Suggestions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/40 shadow-sm hover:shadow-md hover:bg-white/90 transition-all duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-24 h-24 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-1 truncate group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
