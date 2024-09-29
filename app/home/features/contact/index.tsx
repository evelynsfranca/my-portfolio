import Link from "next/link";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "@/mocks/contacts";
import ButtonLink from "@/components/Button/Link";

export default function ContactSection() {
    return (
        <section id="contact" className={styles.section}>

            <header className={styles.header}>
                <h2>Contato</h2>
            </header>

            <div className={styles.content}>
                <p>Entre em contato</p>
                <ButtonLink
                    label="Entrar em contato"
                    url="/contact"
                    color="primary"
                    type="button"
                    target="_self"
                />
            </div>

            <article className={styles.socialMedia}>
                {contacts.map(it => (
                    <Link
                        key={it.link}
                        href={it.link}
                        target="_blank"
                        className={styles.link}
                    >
                        <FontAwesomeIcon icon={it.icon} />
                    </Link>
                ))}
            </article>

        </section>
    );
}
