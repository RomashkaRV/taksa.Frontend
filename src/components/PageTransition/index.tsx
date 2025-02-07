"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import style from "./index.module.scss";
import { opacity, perspective, slide } from "./variants";

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  };
};

type PageTransitionProps = {
  children: ReactNode;
  className?: string;
};

export const PageTransition = ({
  children,
  className
}: PageTransitionProps) => {
  return (
    <div className={classNames(style.inner)}>
      <motion.div {...anim(slide)} className={style.slide} />

      <motion.div {...anim(perspective)} className={classNames(style.page)}>
        <motion.div {...anim(opacity)} className={style.opacity}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};
