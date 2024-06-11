import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evelyn França | Contato"
};


export default function Contact() {
  return (
    <main className={styles.main}>Contact</main>
  );
}
