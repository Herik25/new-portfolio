import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 600, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontWeight: baseWeight,
        display: "inline-block",
        willChange: "font-weight",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const setUpTextHover = (container, type) => {
  if (!container) {
    return () => {};
  }

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  let rafId = null;

  const updateWeights = (mouseX, containerLeft) => {
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const letterCenter = l - containerLeft + w / 2;
      const distance = Math.abs(mouseX - letterCenter);

      const intensity = Math.exp(-(distance ** 2) / 20000);
      const targetWeight = min + (max - min) * intensity;

      gsap.to(letter, {
        fontWeight: targetWeight,
        duration: 0.3,
        ease: "power2.out",
        overwrite: true,
      });
    });
  };

  const handleMouseMove = (e) => {
    if (rafId) cancelAnimationFrame(rafId);

    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    rafId = requestAnimationFrame(() => {
      updateWeights(mouseX, left);
    });
  };

  const handleMouseLeave = () => {
    if (rafId) cancelAnimationFrame(rafId);

    letters.forEach((letter) => {
      gsap.to(letter, {
        fontWeight: base,
        duration: 0.6,
        ease: "power3.out",
        overwrite: true,
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};

function Welcome() {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = setUpTextHover(titleRef.current, "title");
    const cleanupSubtitle = setUpTextHover(subTitleRef.current, "subtitle");

    return () => {
      cleanupTitle?.();
      cleanupSubtitle?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subTitleRef}>
        {renderText(
          "Hey, I'm Harsh! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={titleRef} className="mt-4">
        {renderText("portfolio", "text-9xl italic font-georama", 400)}
      </h1>

      <div className="small-screen">
        <p>This portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
}

export default Welcome;
