import ButtonLink from "@/components/Button/Link";
import { ProjectVersion } from "@/models/ProjectModel";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.css";

export interface ProjectLinksProps {
  version: ProjectVersion;
}

export default function ProjectLinks(props: ProjectLinksProps) {

  const { repositories, links } = props.version;
  const fallback = "evelynfranca.com";

  return (
    <article className={styles.links}>

      <article className={styles.article}>

        <header className={styles.header}>
          <h4>Repositórios</h4>
        </header>

        <div className={styles.content}>

          {repositories.map(repository => (
            <ButtonLink
              key={repository.link}
              label={repository.ref}
              url={repository.link ?? fallback}
              color="primary"
              icon={repository.name == "GitHub" ? faGithub : faGitlab}
              type="link"
              iconSide="left"
            />
          ))}

        </div>

      </article>

      <article className={styles.article}>

        <header className={styles.header}>
          <h4>Links</h4>
        </header>

        <div className={styles.content}>

          <ButtonLink
            label="API"
            url={links.api ?? fallback}
            color="secondary"
            type="link"
            iconSide="left"
          />

          <ButtonLink
            label="Visitar projeto"
            url={links.app ?? fallback}
            color="secondary"
            type="link"
            iconSide="left"
          />

        </div>
      </article>
    </article>
  );
}
