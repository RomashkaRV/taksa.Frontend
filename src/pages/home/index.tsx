import { TypingText } from "./_components";

import style from "./page.module.scss";

export default function HomePage() {
  return (
    <div className={style.page}>
      <TypingText />
    </div>
  );
}
