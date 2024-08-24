'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import Link from "next/link";
import { contacts } from "@/mocks/contacts";
import { useEffect, useState } from "react";
import InputText from "@/components/Input/Text";
import TextArea from "@/components/TextArea";
import ButtonDefault from "@/components/Button/Default";

export interface ContactEmail {
  from?: string,
  subject?: string,
  content?: string
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://192.168.100.8:3000/api';

async function handleContact(email: ContactEmail) {
  try {
      const response = await fetch(API_URL + '/send', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(email),
      });
      return await response.json();
  } catch (error) {
      console.error('Error during fetch:', error);
      return  null;
    }
}

export default function Contact() {

  const [email, setEmail] = useState<ContactEmail>({});
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmail = (e: any) => setEmail(prev => ({ ...prev, ...e }))

  async function sendEmail() {
    setLoading(true);
    const res = await handleContact(email);
    setResponse(res?.id || null);
    setLoading(false);
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className={styles.title}>Contato</h2>
        <p className={styles.subtitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A nesciunt culpa, nisi fugit omnis doloribus sint sunt veritatis soluta obcaecati nam molestias iusto eveniet consectetur placeat eos optio quae dicta.</p>
      </header>
      <div className={styles.content}>
        <article className={styles.formBox}>
          <form className={styles.form}>

            <InputText
              name="email"
              label="E-mail"
              handler={e => handleEmail({ from: e })}
            />

            <InputText
              name="subject"
              label="Assunto"
              handler={e => handleEmail({ subject: e })}
            />

            <TextArea
              name="message"
              label="Mensagem"
              handler={e => handleEmail({ content: e })}
              rows={5}
            />

            <ButtonDefault
              label={loading ? "Enviando..." : "Enviar"}
              handler={sendEmail}
              disabled={loading}
            />

          </form>
        </article>
        <article className={styles.socialMediaBox}>
          <header>
            <p>Veja também:</p>
          </header>
          <div className={styles.socialMedia}>

            {contacts.map(it => (
              <Link
                key={it.link}
                href={it.link}
                target="_blank"
                className={styles.socialMediaLink}
                aria-label={it.label}
              >
                <FontAwesomeIcon icon={it.icon} />
              </Link>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
