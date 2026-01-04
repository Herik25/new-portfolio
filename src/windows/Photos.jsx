import { WindowControls } from "#components";
import { gallery, photosLinks } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { Mail, Search } from "lucide-react";
import React from "react";

function Photos() {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-300">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map((image) => (
              <li
                key={image.id}
                onClick={() =>
                  openWindow("imgfile", {
                    id: image.id,
                    name: "Gallery image",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: image.img,
                  })
                }
              >
                <img src={image.img} alt={`Gallery image ${image.id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
