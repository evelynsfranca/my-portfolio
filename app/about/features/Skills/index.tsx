import { hardSkills, softSkills } from "@/data/about/skills";
import SkillsTable from "./components/Table";
import styles from "./index.module.css";

export default function AboutSkills() {

  return (
    <article id="skills" className={styles.content}>

      <header>
        <h2>Habilidades</h2>
      </header>

      <div className={styles.table}>

        <SkillsTable
          name="Soft skills"
          content={softSkills.sort((a, b) => b.average - a.average)}
        />

        <SkillsTable
          name="Hard skills"
          content={hardSkills.sort((a, b) => b.average - a.average)}
        />

      </div>
      
    </article>
  );
}
