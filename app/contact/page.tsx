'use client';

import ButtonDefault from "@/components/Button/Default";
import InputText from "@/components/Input/Text";
import TextArea from "@/components/TextArea";
import Toast from "@/components/Toast";
import { contacts } from "@/data/contacts";
import { ContactEmailModel } from "@/models/ContactEmailModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { handleContact } from "./api";
import styles from "./page.module.css";
import { emailValidation } from "./validation";

export default function Contact() {

  const [email, setEmail] = useState<ContactEmailModel>();
  const [response, setResponse] = useState<Response | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const handleEmail = (e: any) => setEmail(prev => ({ ...prev, ...e }))

  async function sendEmail() {

    const valiation = emailValidation(email, setToastMessage);

    if (!valiation) {
      setToast(true);
    } else {

      setLoading(true);

      const res = email && await handleContact(email);

      setResponse(res);

      if (res?.status === 200) {
        resetForm();
        setToastMessage("Mensagem enviada com sucesso!");
        setEmail(undefined);
        closeToast();

      } else {
        console.clear();
        setToastMessage("Erro ao enviar a mensagem, tente novamente mais tarde.");
      }

      setLoading(false);
      setToast(true);

      setTimeout(() => {
        setToast(false)
      }, 10000);
    }
  }

  const closeToast = () => {
    if (toast && toastMessage) {
      setToast(false);
      setToastMessage(undefined);
    }
  }

  const resetForm = () => setEmail({ name: '', from: '', subject: '', content: '' });

  return (
    <>
      <main className={styles.main}>

        <header className={styles.header}>
          <h2 className={styles.title}>Contato</h2>
          <p className={styles.subtitle}>Informe seus dados e a mensagem que deseja enviar que eu retornarei o contato o mais breve possível (:</p>
        </header>

        <div className={styles.content}>

          <article className={styles.formBox}>
            <form className={styles.form}>

              <InputText
                name="name"
                label="Seu nome"
                handler={e => handleEmail({ name: e })}
                value={email?.name}
                placeholder="John Doe"
                onFocus={closeToast}
              />

              <InputText
                name="email"
                label="Seu contato"
                handler={e => handleEmail({ from: e })}
                value={email?.from}
                placeholder="doe.jhon@noodle.com"
                onFocus={closeToast}
              />

              <InputText
                name="subject"
                label="Assunto"
                handler={e => handleEmail({ subject: e })}
                value={email?.subject}
                placeholder="Orçamento para desenvolver um site"
                onFocus={closeToast}
              />

              <TextArea
                name="message"
                label="Mensagem"
                handler={e => handleEmail({ content: e })}
                rows={5}
                value={email?.content}
                placeholder="Gostaria de solicitar um orçamento para desenvolver um site XPTO..."
                onFocus={closeToast}
              />

              <ButtonDefault
                label={loading ? "Enviando..." : "Enviar"}
                handler={sendEmail}
                disabled={toastMessage != undefined || loading}
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
      {toast && toastMessage && (
        <Toast
          message={toastMessage}
          type={response?.ok ? true : false}
          closeHandler={closeToast}
        />
      )}
    </>
  );
}
