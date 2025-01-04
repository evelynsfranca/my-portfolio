"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { menuList } from "@/mocks/menu";
import logo from '@/public/images/logo.svg';
import logoHover from '@/public/images/logo2.svg';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {

  const currentPage = usePathname();
  const [menu, setMenu] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>(logo);

  const setActiveStyle = (link: string): string =>
    (link != '/' && currentPage.includes(link))
      || (link === '/' && currentPage === '/')
      ? styles.active
      : "";

  const setMenuStyle = (): string => `${menu ? styles.open : ""}`;
  const setMenuButtonStyle = (): string => `${styles.button + " " + setMenuStyle()}`;

  useEffect(() => setMenu(false), [currentPage]);

  return (
    <nav className={styles.nav}>

      <div>
        <Link
          className={styles.link}
          href="/"
        >
          <Image
            alt="logo"
            src={logoSrc}
            className={styles.logo}
            onMouseEnter={() => setLogoSrc(logoHover)}
            onMouseLeave={() => setLogoSrc(logo)}
          />
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
          <li
            key={it.title}
            className={styles.item}
          >
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