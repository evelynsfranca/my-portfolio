"use client";

import { contacts } from "@/data/contacts";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export default function Footer() {

  const currentPage = usePathname();
  
  return (
    <footer className={styles.footer}>

      <article className={styles.text}>

        <span>Desenvolvido por Evelyn França</span>

        <FontAwesomeIcon
          className={styles.icon}
          icon={faHeart}
        />
      </article>

      {currentPage != "/"
        && currentPage != "/contato"
        && (
          <article className={styles.socialMedia}>

            {contacts.map((it, i) => (
              <Link
                key={i}
                href={it.link}
                target="_blank"
                className={styles.link}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={it.icon}
                />
              </Link>
            ))}

          </article>
        )}
    </footer>
  );
}
