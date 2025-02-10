"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Используем хук для получения текущего пути

import style from "./index.module.scss";

// Определяем интерфейс для ссылок
interface TabLink {
  id: string;
  label: string;
  url: string;
}

// Массив ссылок
const links: TabLink[] = [
  { id: "home", label: "Home", url: "/" },
  { id: "about", label: "About", url: "/about" },
  { id: "projects", label: "Projects", url: "/projects" },
  { id: "business", label: "Business", url: "/business" }
];

// Компонент Navbar
export const Navbar = () => {
  const location = useLocation(); // Получаем текущий путь
  const [activeLink, setActiveLink] = useState<string>("");

  // Обновляем активную ссылку при изменении пути
  useEffect(() => {
    const currentTab =
      links.find((link) => link.url === location.pathname)?.id || links[0].id;
    setActiveLink(currentTab);
  }, [location.pathname]);

  return (
    <div className={style.tabsContainer}>
      {links.map((link) => (
        <Link
          to={link.url}
          key={link.id}
          onClick={() => setActiveLink(link.id)}
          className={classNames(
            style.link,
            activeLink === link.id && style.active
          )}
        >
          {activeLink === link.id && (
            <motion.span
              layoutId="bubble"
              className={style.bubble}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          {link.label}
        </Link>
      ))}
    </div>
  );
};
