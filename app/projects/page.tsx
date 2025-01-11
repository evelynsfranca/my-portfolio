import { projects } from "@/data/projects/projects";
import { Metadata } from "next";
import ProjectCard from "./components/Card";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projetos"
};

export default function Projects() {  
  return (
    <main id="projects" className={styles.main}>

      <section className={styles.section}>

        <header className={styles.header}>
          <h1 className={styles.title}>Projetos</h1>

          <h2 className={styles.subTitle}>
            Nesta seção, você encontrará uma coleção dos projetos que desenvolvi ao longo da minha trajetória como desenvolvedora de software. Cada projeto reflete desafios enfrentados, soluções criativas e o aprendizado adquirido ao aplicar diversas tecnologias e metodologias.
          </h2>
          <h2 className={styles.subTitle}>
            Explore os detalhes de cada projeto e veja como utilizei ferramentas como Java, Spring Boot, ReactJS, MySQL, Azure, entre outras, para criar soluções funcionais e impactantes.
          </h2>
          <h2 className={styles.subTitle}>
            Clique em qualquer card para saber mais sobre o projeto e seu processo de desenvolvimento ou visitá-lo!
          </h2>

        </header>

        <article className={styles.content}>

          {projects.map(it => (
            <ProjectCard
              key={it.id}
              {...it}
            />
          ))}

        </article>

      </section>
    </main>
  );
}
