import { hardSkills, softSkills } from "@/mocks/about/skills";
import SkillsTable from "./components/Table";
import styles from "./index.module.css";

export interface HabilityProps {
  name: string,
  average: number
}

export default function AboutSkills() {
  
  
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
