"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import style from "./index.module.scss";

interface tabLink {
  id: string;
  label: string;
  url: string;
}

const links: tabLink[] = [
  { id: "home", label: "Home", url: "/" },
  { id: "about", label: "About", url: "/about" },
  { id: "projects", label: "Projects", url: "/projects" },
  { id: "business", label: "Business", url: "/business" }
];

export const Navbar = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const currentTab =
      links.find((link) => link.url === pathname)?.id || links[0].id;
    setActiveLink(currentTab);
  }, [pathname]);

  return (
    <div className={style.tabsContainer}>
      {links.map((link) => (
        <Link
          href={link.url}
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
