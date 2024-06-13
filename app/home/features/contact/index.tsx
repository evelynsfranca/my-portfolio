import Link from "next/link";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contacts } from "@/mocks/contacts";

export default function ContactSection() {
    return (
        <section id="contact" className={styles.section}>
            <header className={styles.header}>
                <h2>Contato</h2>
            </header>
            <div className={styles.content}>
                <p>Entre em contato</p>
                <Link href="/contact" className={styles.button}>Entrar em contato</Link>
            </div>
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
        </section>
    );
}
