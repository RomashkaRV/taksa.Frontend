import classNames from "classnames";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import style from "./index.module.scss";
import { opacity, perspective, slide } from "./variants";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  };
};

interface IProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedWrapper = ({ children, className }: IProps) => (
  <div className={classNames(style.inner)}>
    <motion.div {...anim(slide)} className={style.slide} />

    <motion.div
      {...anim(perspective)}
      className={classNames(style.page, className)}
    >
      <motion.div {...anim(opacity)} className={style.opacity}>
        {children}
      </motion.div>
    </motion.div>
  </div>
);
