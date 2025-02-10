"use client";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

import IPaw from "assets/paw.svg";

import style from "./index.module.scss";

export const Cursor = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

  useEffect(() => {
    // Проверка, является ли устройство мобильным или планшетом
    const checkIsMobileOrTablet =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || "ontouchstart" in window;

    setIsMobileOrTablet(checkIsMobileOrTablet);

    if (!checkIsMobileOrTablet) {
      document.body.style.cursor = "none"; // Скрываем стандартный курсор

      const cursor = document.getElementById("cursor");

      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        gsap.to(cursor, { x: clientX, y: clientY, duration: 0.1 });
      };

      const attachHoverListeners = () => {
        const hoverElements = document.querySelectorAll("#click, a, button");
        hoverElements.forEach((element) => {
          const onMouseEnter = () => {
            gsap.to(cursor, { scale: 2 });
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
    }
  }, []);

  // Условный рендеринг курсора только для десктопных устройств
  if (isMobileOrTablet) {
    return null; // Не рендерим курсор на мобильных устройствах
  }

  return <img src={IPaw} alt="paw" className={style.cursor} id="cursor" />;
};
