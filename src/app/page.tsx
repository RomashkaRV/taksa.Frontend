"use client";

import { useTypewriter } from "react-simple-typewriter";

import style from "./page.module.scss";

export default function MainPage() {
  const [text] = useTypewriter({
    words: ["Taksa", "Developer", "Manager", "Gamer"],
    loop: true,
    typeSpeed: 120,
    delaySpeed: 2000
  });

  return (
    <div className={style.page}>
      <div className={style.content}>
        <p className={style.title}>
          I'm a <span>{text}</span>
        </p>
      </div>
    </div>
  );
}
