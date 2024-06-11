"use client";

import { useState } from "react";
import styles from "./index.module.css";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
  const setMenuButtonStyle = (): string => `${styles.menuButton + " " + setMenuStyle()}`;
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link className={styles.link} href="/">
          Evelyn França
        </Link>
      </div>
      <button 
        className={setMenuButtonStyle()} 
        onClick={() => setMenu(!menu)}
      >
        <FontAwesomeIcon icon={!menu ? faBars : faXmark} />
      </button>

      <ul className={styles.list + " " + setMenuStyle()}>
        {menuList.map((it) => (
          <li key={it.title} className={styles.listItem}>
            <Link
              className={styles.link + " " + setActiveStyle(it.link)}
              href={it.link}
            >
              {it.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
