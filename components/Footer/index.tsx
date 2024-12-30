"use client";

import { contacts } from "@/data/contacts";
import { faHeart, faSquareFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Footer() {

  const currentPage = usePathname();
  const [hoverStyle, setHoverStyle] = useState<number>();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className={styles.footer}>

      <article 
        className={styles.text} 
        onMouseEnter={() => setHoverStyle(contacts.length)}
        onMouseLeave={() => setHoverStyle(undefined)}
      >

        <span>Desenvolvido por Evelyn França</span>

        {isClient && (
          <FontAwesomeIcon
            className={styles.icon}
            icon={faHeart}
            mask={faSquareFull}
            style={{
              background: hoverStyle == contacts.length
                ? 'linear-gradient(45deg, var(--primary-color-variant), var(--secondary-color-variant))'
                : 'white'
            }}
          />
        )}
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
                className={styles.link}
                onMouseEnter={() => setHoverStyle(i)}
                onMouseLeave={() => setHoverStyle(undefined)}
              >
                {isClient && (
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={it.icon}
                    mask={faSquareFull}
                    style={{
                      background: hoverStyle == i
                        ? 'linear-gradient(45deg, var(--primary-color-variant), var(--secondary-color-variant))'
                        : 'white'
                    }}
                  />
                )}
              </Link>
            ))}

          </article>
        )}
    </footer>
  );
}
