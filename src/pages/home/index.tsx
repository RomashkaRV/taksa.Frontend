import { TypingText } from "./_components/TypingText";

import "swiper/css";
import "swiper/css/effect-coverflow";

import style from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={style.page}>
      <TypingText />
    </div>
  );
}
