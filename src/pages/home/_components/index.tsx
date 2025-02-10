import { useTypewriter } from "react-simple-typewriter";

import style from "./index.module.scss";

export const TypingText = () => {
  const [text] = useTypewriter({
    words: ["Taksa", "Developer", "Manager", "Gamer"],
    loop: true,
    typeSpeed: 120,
    delaySpeed: 2000
  });

  return (
    <p className={style.title}>
      I'm a <span>{text}</span>
    </p>
  );
};
