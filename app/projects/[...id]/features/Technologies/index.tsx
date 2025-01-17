import { technologiesList } from "@/data/technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./index.module.css";

export interface ProjectTechnologiesProps {
  technologies: string[];
}

export default function ProjectTechnologies(props: ProjectTechnologiesProps) {

  const { technologies } = props;

  useEffect(() => {
  }, []);

  return (

    <article className={styles.technologies}>

      <header className={styles.header}>
        <h2 className={styles.title}>Tecnologias utilizadas</h2>
      </header>

      <div className={styles.content}>
        {technologies
          && technologies?.length > 0
          && technologies
            .map((it) =>
              technologiesList
                .filter(j => it.includes(j.name))
                .map(k => (
                  <div
                    key={k.name}
                    aria-label={k.name}
                    className={styles.technology}
                  >
                    {typeof k.icon == "string"
                      ? (
                        <Image
                          key={k.name}
                          src={k.icon}
                          alt={k.name}
                          height={0}
                          width={0}
                          sizes="100vw"

                        />
                      ) : (
                        <FontAwesomeIcon
                          key={k.name}
                          style={{ color: k.color }}
                          icon={k.icon}
                        />
                      )}

                    <span>{it}</span>
                  </div>
                ))
            )
        }
      </div>

    </article>
  );
}
