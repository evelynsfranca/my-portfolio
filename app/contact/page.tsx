'use client';

import { contacts } from "@/data/contacts";
import { faSquareFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "./components/Form";
import ServicesList from "./components/ServicesList";
import styles from "./page.module.css";

export default function Contact() {

  const [isClient, setIsClient] = useState(false);
  const [hoverStyle, setHoverStyle] = useState<number>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <main className={styles.main}>

        <header className={styles.header}>

          <h1 className={styles.title}>Contato</h1>

          <h2 className={styles.subtitle}>Solicite agora seu orçamento!</h2>

          <p className={styles.subtitle}>
            Informe seus dados e a mensagem que deseja enviar que eu retornarei o contato o mais breve possível (:
          </p>

          <h3 className={styles.subtitle}>
            Ah, e não esqueça de fornecer os detalhes do projeto para orçamento de serviços e/ou tirar dúvidas!
          </h3>

        </header>

        <div className={styles.content}>

          <ContactForm />

          <div>

            <ServicesList />

            <article className={styles.socialMediaBox}>

              <header>
                <h2>Visite também minhas redes sociais:</h2>
              </header>

              <div className={styles.socialMedia}>

                {contacts.map((it, i) => (
                  <Link
                    key={i}
                    href={it.link}
                    target="_blank"
                    className={styles.link}
                    aria-label={it.label}
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
              </div>
            </article>

          </div>
        </div>

      </main>
    </>
  );
}
