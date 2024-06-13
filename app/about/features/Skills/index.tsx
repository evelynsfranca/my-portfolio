import SkillsTable from "./components/Table";
import styles from "./index.module.css";

export interface HabilityProps {
  name: string,
  average: number
}

export default function AboutSkills() {
  
  const softSkills: HabilityProps[] = [
    {
      name: "Comunicação",
      average: 30
    },
    {
      name: "Organização",
      average: 50
    },
    {
      name: "Planejamento",
      average: 60
    },
    {
      name: "Foco",
      average: 80
    }
  ];

  const hardSkills: HabilityProps[] = [
    {
      name: "Java",
      average: 30
    },
    {
      name: "JavaScript",
      average: 50
    },
    {
      name: "Lógica de Programação",
      average: 60
    },
    {
      name: "Git",
      average: 80
    }
  ];
  
  return (
    <article id="skills" className={styles.content}>
      <header>
        <h2>Habilidades</h2>
      </header>
      <div className={styles.contentTable}>
        <SkillsTable name="Soft skills" content={softSkills} />
        <SkillsTable name="Hard skills" content={hardSkills} />
      </div>
    </article>
  );
}
