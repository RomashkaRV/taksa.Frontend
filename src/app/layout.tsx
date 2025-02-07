"use client";

import { AnimatePresence } from "framer-motion";
import { Golos_Text } from "next/font/google";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import React from "react";

import { Cursor, Navbar, Footer, PageTransition } from "components";

import HeadComponent from "./head";
import "style/index.scss";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={golos.className}>
      <HeadComponent />

      <body>
        <Cursor />

        <Navbar />

        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>{children}</PageTransition>
        </AnimatePresence>

        {/*<DachshundTrail />*/}

        <Footer />

        <script src="//cdn.jsdelivr.net/npm/eruda"></script>

        <script>eruda.init();</script>
      </body>
    </html>
  );
}
