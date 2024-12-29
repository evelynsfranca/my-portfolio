"use client";

import { contacts } from "@/mocks/contacts";
import { faHeart, faSquareFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";

export default function Footer() {

  const currentPage = usePathname();

  return (
    <footer className={styles.footer}>

      <article className={styles.text}>

        <div>Desenvolvido por Evelyn França</div>

        <FontAwesomeIcon icon={faHeart} mask={faSquareFull} />

      </article>

      {currentPage != "/"
        && currentPage != "/contact"
        && (
          <article className={styles.socialMedia}>

            {contacts.map((it, i) => (
              <Link
                key={i}
                href={it.link}
                target="_blank"
                className={styles.socialMediaLink}
              >
                <FontAwesomeIcon icon={it.icon} mask={faSquareFull} />
              </Link>
            ))}

          </article>
        )}

    </footer>
  );
}
