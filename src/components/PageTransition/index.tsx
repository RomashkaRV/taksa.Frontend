"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import style from "./index.module.scss";

const variants = {
  initial: { opacity: 0, x: "100%", scale: 1, duration: 0.3 },
  animate: { opacity: 1, x: 0, scale: 1, duration: 0.3 },
  exit: {
    scale: 0,
    y: "100%",
    opacity: 0,
    transition: { duration: 0.8 }
  }
};

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export const PageTransition = ({
  children,
  className
}: PageTransitionProps) => {
  const pathname = usePathname();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={classNames(style.pageTransition, className)}
        initial={isFirstLoad ? false : variants.initial}
        animate={variants.animate}
        exit={variants.exit}
        transition={{ type: "normal" }}
        key={pathname}
      >
        <motion.div className={style.opacity}>{children}</motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
