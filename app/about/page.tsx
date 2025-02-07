import { Metadata } from "next";
import AboutExperience from "./features/Experience";
import AboutHistory from "./features/History";
import AboutSkills from "./features/Skills";
import styles from "./page.module.css";
import AboutCertificates from "./features/Certificates";

export const metadata: Metadata = {
  title: "Sobre | Desenvolvimento de Sites",
  description: "Conheça a minha trajetória profissional, certificações, habilidades e história com o desenvolvimento de software.",
  keywords: ["Evelyn França", "Sobre", "Sobre mim" , "Habilidades", "História", "Skills", "Certificações", "Experiência profissional", "Desenvolvimento de Sites", "Criação de Aplicativos", "Landing Pages", "SEO", "Integrações Personalizadas", "Serviços Web"]
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
        <AboutCertificates />       
        <AboutSkills />
      </section>
    </main>
  );
}
