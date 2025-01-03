import ButtonDefault from "@/components/Button/Default";
import InputText from "@/components/Input/Text";
import TextArea from "@/components/TextArea";
import Toast from "@/components/Toast";
import { services } from "@/data/services/services";
import { ContactEmailModel } from "@/models/ContactEmailModel";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { handleContact } from "../../api";
import { emailValidation } from "../../validation";
import styles from "./index.module.css";

export default function ContactForm() {

  const [email, setEmail] = useState<ContactEmailModel>();
  const [response, setResponse] = useState<Response | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>();

  const params = useSearchParams();

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

  useEffect(() => {
    if (params.get('service')) {
      let service = services.filter(it => it.id == params.get('service'))[0];
      setEmail({
        subject: service.title,
        content: "Olá gostaria de fazer um orçamento para o serviço de " + service.title + "... (Informe os detalhes do projeto ou as dúvidas)"
      });
    }
  }, [params]);

  return (
    <>
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
