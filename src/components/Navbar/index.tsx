"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import style from "./index.module.scss";

interface TabLink {
  id: string;
  label: string;
  url: string;
}

const links: TabLink[] = [
  { id: "home", label: "Home", url: "/" },
  { id: "about", label: "About", url: "/about" },
  { id: "projects", label: "Projects", url: "/projects" },
  { id: "business", label: "Business", url: "/business" }
];

export const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const currentTab =
      links.find((link) => link.url === location.pathname)?.id || links[0].id;
    setActiveLink(currentTab);
  }, [location.pathname]);

  return (
    <div className={style.container}>
      <div className={style.tabs}>
        {links.map((link) => (
          <Link
            to={link.url}
            key={link.id}
            onClick={() => setActiveLink(link.id)}
            className={classNames(style.link, {
              [style.linkActive]: activeLink === link.id
            })}
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
    </div>
  );
};
