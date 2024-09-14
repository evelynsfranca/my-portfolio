"use client";

import styles from "./page.module.css";
import galleryStyle from "./gallery/page.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/mocks/projects/projects";
import ProjectCarousel from "./components/carousel";
import { useEffect, useState } from "react";
import ProjectGallery from "./components/gallery";

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
          <Link href={project.repo}>Repositório</Link>
          <Link href={project.link}>Visitar</Link>
        </footer>
      </section>
    </main>
  );
}
