import styles from "./index.module.css";
import ExperienceCard from "./components";
import { experiences } from '@/mocks/about/experiences';

export default function AboutExperience() {
  return (
    <article id="experience" className={styles.content}>

      <header>
        <h2>Trajetória profissional</h2>
      </header>

      <div className={styles.contentBox}>
        {experiences.map(it => (
          <ExperienceCard
            key={it.image.alt}
            year={it.year}
            image={it.image}
            description={it.description}
          />
        ))}
      </div>

    </article>
  );
}
