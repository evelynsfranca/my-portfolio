import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evelyn França | Sobre"
};


export default function About() {
  return (
    <main className={styles.main}>About</main>
  );
}
