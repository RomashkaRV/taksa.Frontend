import { Golos_Text } from "next/font/google";
import Link from "next/link";
import type { ReactNode } from "react";
import React from "react";

import { Cursor, DachshundTrail, PageTransition } from "components";

import HeadComponent from "./head";

import "style/index.scss";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={golos.className}>
      <HeadComponent />

      <body>
        <Cursor />

        <div className="nav">
          <Link href="/second">Second</Link>

          <Link href="/">Home</Link>
        </div>

        <PageTransition>
          <div>{children}</div>
        </PageTransition>

        {/*<ParticlesBack />*/}

        <DachshundTrail />

        <script src="//cdn.jsdelivr.net/npm/eruda"></script>

        <script>eruda.init();</script>
      </body>
    </html>
  );
}
