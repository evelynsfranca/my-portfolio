import { projects } from "@/mocks/projects/projects";
import ProjectCard from "./components/Card";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos"
};


export default function Projects() {
  return (
    <main id="projects" className={styles.main}>
      <section className={styles.section}>

        <header className={styles.header}>
          <h1 className={styles.title}>Projetos</h1>
          <h2 className={styles.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio, consectetur dolorum atque quidem aliquid temporibus placeat tempora modi debitis. Eligendi quibusdam necessitatibus culpa labore explicabo, iste laudantium esse quisquam.</h2>
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
