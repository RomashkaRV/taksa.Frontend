import type { EmblaOptionsType } from "embla-carousel";

import { EmblaCarousel } from "components/Carousel/EmblaCarousel";

import { TypingText } from "./_components/TypingText";

import style from "./page.module.scss";

export default function HomePage() {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className={style.page}>
      <TypingText />

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
