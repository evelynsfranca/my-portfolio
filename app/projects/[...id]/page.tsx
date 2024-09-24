"use client";

import styles from "./page.module.css";
import { useParams } from "next/navigation";
import { projects } from "@/mocks/projects/projects";
import ProjectCarousel from "./components/carousel";
import { useState } from "react";
import ProjectGallery from "./components/gallery";
import ButtonLink from "@/components/Button/Link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  const params = useParams<{ id: string }>();
  const project = projects.filter((it) => it.id === Number(params.id[0]))[0];

  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [showImages, setShowImages] = useState<boolean>(false);


  return (
    <main id={project.name} className={styles.main}>
      <section className={styles.section}>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
          <h2 className={styles.subTitle}>
            {project.shortDescription}
          </h2>
        </header>

        {project.images && project.images?.length > 0 && (
          <>
            <ProjectGallery
              images={project.images}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              showImages={showImages}
              setShowImages={setShowImages}
            />
            <ProjectCarousel
              images={project.images}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              showImages={showImages}
              setShowImages={setShowImages}
            />
          </>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        <footer className={styles.footer}>
          <ButtonLink 
            label="Repositório"
            url={project.repo}
            color="primary"
            icon={faGithub}
          />
          <ButtonLink 
            label="Visitar projeto"
            url={project.link}
            color="secondary"
          />
        </footer>
      </section>
    </main>
  );
}
