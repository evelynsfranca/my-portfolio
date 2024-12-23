import ButtonLink from "@/components/Button/Link";
import { contacts } from "@/mocks/contacts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";

export default function ContactSection() {
    return (
        <section id="contact" className={styles.section}>

            <header className={styles.header}>
                <h2>Contato</h2>
            </header>

            <div className={styles.content}>
                <p>Dúvidas ou sugestões?</p>
                <p>Entre em contato.</p>
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
