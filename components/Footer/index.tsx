"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contacts } from "@/mocks/contacts";

export default function Footer() {
  const currentPage = usePathname();

  return (
    <footer className={styles.footer}>

      <article className={styles.text}>
        <div>Desenvolvido por Evelyn França</div>
        <FontAwesomeIcon icon={faHeart} />
      </article>

      {currentPage != "/"
        && currentPage != "/contact"
        && (
          <article className={styles.socialMedia}>
            {contacts.map(it => (
              <Link
                key={it.link}
                href={it.link}
                target="_blank"
                className={styles.socialMediaLink}
              >
                <FontAwesomeIcon icon={it.icon} />
              </Link>
            ))}
          </article>
        )}
    </footer>
  );
}
