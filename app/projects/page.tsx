import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evelyn França | Projetos"
};


export default function Projects() {
  return (
    <main className={styles.main}>Projects</main>
  );
}
