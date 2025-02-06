"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState, useRef } from "react";

import style from "./index.module.scss";

const pagesOrder = ["/", "/about", "/projects", "/business"];

const getVariants = (direction: "left" | "right") => ({
  initial: {
    opacity: 0,
    scale: 1,
    x: direction === "right" ? "100%" : "-100%",
    transition: { duration: 0.5 }
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    scale: 0,
    x: direction === "right" ? "100%" : "-100%",
    transition: { duration: 0.5 }
  }
});

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export const PageTransition = ({
  children,
  className
}: PageTransitionProps) => {
  const pathname = usePathname();
  const prevPathRef = useRef<string | null>(null); // Храним предыдущее значение
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (!isFirstLoad) {
      prevPathRef.current = pathname;
    }
    setIsFirstLoad(false);
  }, [pathname]);

  const prevPath = prevPathRef.current;
  const prevIndex = pagesOrder.indexOf(prevPath ?? "");
  const currentIndex = pagesOrder.indexOf(pathname);
  const direction = prevIndex < currentIndex ? "right" : "left";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={classNames(style.pageTransition, className)}
        initial={isFirstLoad ? false : getVariants(direction).initial}
        animate={getVariants(direction).animate}
        exit={getVariants(direction).exit}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        key={pathname}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
