"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ISausage from "assets/icons/sausage.svg";
import DogImage from "assets/images/dog.png";
import IPaw from "assets/paw.svg";

import style from "./index.module.scss";

export const DachshundTrail = () => {
  const [trails, setTrails] = useState<
    { id: string; x: number; y: number; rotate: number; delay: number }[]
  >([]);
  const [clickCount, setClickCount] = useState(0);
  const [showDog, setShowDog] = useState(false);

  useEffect(() => {
    if (clickCount === 3) {
      setClickCount(0);
    }
  }, [clickCount]);

  const addTrails = () => {
    setClickCount((prev) => prev + 1);

    if (clickCount < 2) {
      const newTrails = Array.from({ length: 70 }, () => ({
        id: uuidv4(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotate: Math.random() * 360,
        delay: Math.random() * 2
      }));

      setTrails((prev) => [...prev, ...newTrails]);

      newTrails.forEach((trail) => {
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== trail.id));
        }, 3000);
      });
    } else if (clickCount === 2) {
      setShowDog(true);
      setTimeout(() => {
        setShowDog(false);
        setClickCount(0); // Сброс счетчика
      }, 3000);
    }
  };

  return (
    <div className={style.container}>
      <Image
        src={ISausage}
        onClick={addTrails}
        className={style.button}
        alt="sausage"
      />

      <AnimatePresence>
        {trails.map((trail) => (
          <motion.div
            key={trail.id}
            className={style.trail}
            style={{
              top: trail.y,
              left: trail.x,
              transform: `rotate(${trail.rotate}deg)`
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: trail.delay }}
          >
            <Image src={IPaw} alt="paw" />
          </motion.div>
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {showDog && (
          <motion.div
            className={style.dogContainer}
            initial={{ bottom: -200, opacity: 0, scale: 0.5 }}
            animate={{ bottom: 0, opacity: 1, scale: 1 }}
            exit={{ bottom: -200, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={DogImage} alt="dog" className={style.dogImage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
