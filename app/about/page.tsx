import styles from "./page.module.css";
import { Metadata } from "next";
import AboutHistory from "./features/History";
import AboutExperience from "./features/Experience";
import AboutSkills from "./features/Skills";

export const metadata: Metadata = {
  title: "Evelyn França | Sobre"
};

export default function About() {

  return (
    <main id="about" className={styles.main}>
      <section className={styles.section}>

        <header className={styles.header}>
          <h1 className={styles.title}>Sobre</h1>
        </header>

        <AboutHistory />
        <AboutExperience />        
        <AboutSkills />
      </section>
    </main>
  );
}
