"use client";

import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentPage = usePathname();

  return (
    <footer className={styles.footer}>
      
      <article className={styles.text}>
        <div>Desenvolvido por Evelyn França</div>
        <FontAwesomeIcon icon={faHeart} />
      </article>

      {currentPage != "/" && (
        <article className={styles.socialMedia}>
          <Link
            href="https://www.instagram.com/edsf_per"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/evelynsfranca/"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://github.com/evelynsfranca"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://wa.me/5541984017050/?&text&type=phone_number&app_absent=1"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link
            href="mailto:francasevelyn@gmail.com"
            target="_blank"
            className={styles.socialMediaLink}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </article>
      )}
    </footer>
  );
}
