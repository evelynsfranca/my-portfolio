"use client";

import { useState } from "react";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export interface MenuProps {
  link: string;
  title: string;
}

export default function Menu() {
  
  const currentPage = usePathname();
  const [menu, setMenu] = useState<boolean>(false);

  const menuList: MenuProps[] = [
    { link: "/", title: "Home" },
    { link: "/services", title: "Serviços" },
    { link: "/projects", title: "Projetos" },
    { link: "/about", title: "Sobre" },
    { link: "/contact", title: "Contato" }
  ];

  const setActiveStyle = (link: string): string => `${link === currentPage ? styles.active : ""}`;
  const setMenuStyle = (): string => `${menu ? styles.menuOpen : ""}`;
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a className={styles.link} href="/">
          Evelyn França
        </a>
      </div>
      <div 
        className={styles.menuButton + " " + setMenuStyle()} 
        onClick={() => setMenu(!menu)}
      >
        <FontAwesomeIcon icon={!menu ? faBars : faXmark} />
      </div>

      <ul className={styles.list + " " + setMenuStyle()}>
        {menuList.map((it, index) => (
          <li key={index} className={styles.listItem}>
            <a
              className={styles.link + " " + setActiveStyle(it.link)}
              href={it.link}
            >
              {it.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
