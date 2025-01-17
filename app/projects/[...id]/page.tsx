"use client";

import { projects } from "@/data/projects/projects";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectDetails from "./features/Details";
import ProjectGallery from "./features/Gallery";
import ProjectLinks from "./features/Links";
import styles from "./page.module.css";
import ProjectTechnologies from "./features/Technologies";
import ButtonBack from "@/components/Button/Back";

export default function Project() {

  const params = useParams<{ id: string }>();
  const router = useRouter();
  const project = projects.filter((it) => it.id === params.id[0])[0];
  const [selectedVersion, setSelectedVersion] = useState<string>();

  const handleVersion = (version: string) => {
    version == selectedVersion
      ? setSelectedVersion("")
      : setSelectedVersion(version);
  }

  useEffect(() => {
    selectedVersion
      ? router.push(project.id + '#' + selectedVersion)
      : router.push(project.id);
  }, [selectedVersion]);
  
  useEffect(() => { document.body.scrollTo({ top: 0, behavior: 'smooth' })}, []);

  return (
    <main id={project.name} className={styles.main}>

      <section className={styles.section}>

        <ButtonBack url="/projetos" />

        <header className={styles.header}>

          <h1 className={styles.title}>{project.name}</h1>

          <h2 className={styles.subTitle}>
            {project.shortDescription}
          </h2>

        </header>

        <p>{project.resume}</p>

        <article className={styles.versions}>

          <header>
            <h3>Versões:</h3>
          </header>

          <div>

            <ul className={styles.list}>

              {project.versions.map(version => (

                <li
                  id={version.tag}
                  key={version.tag}
                  className={`${styles.details} ${selectedVersion == version.tag && styles.active}`}
                >
                  <p
                    className={styles.version}
                    onClick={() => handleVersion(version.tag)}
                  >
                    <FontAwesomeIcon
                      icon={selectedVersion == version.tag ? faChevronDown : faChevronRight}
                    />
                    <span>{version.tag}</span>
                  </p>

                  <div>

                    <ProjectDetails projectId={project.id} versionTag={version.tag} />

                    <ProjectGallery projectId={project.id} versionTag={version.tag} />

                    <ProjectTechnologies technologies={version.technologies} />

                    <footer className={styles.footer}>
                      <ProjectLinks version={version} />
                    </footer>

                  </div>
                </li>
              ))}
            </ul>
          </div>

        </article>

      </section>
    </main>
  );
}
