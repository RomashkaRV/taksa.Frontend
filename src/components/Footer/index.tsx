"use client";

import { motion } from "framer-motion";

import { IGitHub, IMail, ITelegram } from "./_assets";

import style from "./index.module.scss";

const socialLinks = [
  { id: "facebook", icon: ITelegram, url: "/" },
  { id: "instagram", icon: IMail, url: "/" },
  { id: "twitter", icon: IGitHub, url: "/" }
];

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        {socialLinks.map(({ id, icon, url }) => (
          <motion.a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={icon} alt={id} />
          </motion.a>
        ))}
      </div>

      {/*<p>&copy; {new Date().getFullYear()} Все права защищены</p>*/}
    </footer>
  );
};
