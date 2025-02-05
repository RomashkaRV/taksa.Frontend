"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

import style from "./index.module.scss";

export const Cursor = () => {
  useEffect(() => {
    document.body.style.cursor = "none";

    const cursor = document.getElementById("cursor");

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX, y: clientY, duration: 0.1 });
    };

    const attachHoverListeners = () => {
      const hoverElements = document.querySelectorAll("#click, a, button");

      hoverElements.forEach((element) => {
        const onMouseEnter = () => {
          gsap.to(cursor, { scale: 3 });
        };

        const onMouseLeave = () => {
          gsap.to(cursor, { scale: 1 });
        };

        element.addEventListener("mouseenter", onMouseEnter);
        element.addEventListener("mouseleave", onMouseLeave);

        return () => {
          element.removeEventListener("mouseenter", onMouseEnter);
          element.removeEventListener("mouseleave", onMouseLeave);
        };
      });
    };

    attachHoverListeners();

    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return <div className={style.cursor} id="cursor" />;
};
