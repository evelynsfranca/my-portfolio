"use client";

import { projects } from "@/data/projects/projects";
import { ProjectImageModel } from "@/models/ProjectModel";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchImages } from "../api";
import ProjectDetails from "./features/Details";
import ProjectGallery from "./features/Gallery";
import ProjectLinks from "./features/Links";
import styles from "./page.module.css";

type ProjectImages = {
  version: string;
  images: ProjectImageModel[];
}

export default function Project() {

  const params = useParams<{ id: string }>();
  const project = projects.filter((it) => it.id === params.id[0])[0];
  const [selectedVersion, setSelectedVersion] = useState<string>(project.versions[0].tag);
  const [imagesArr, setImagesArr] = useState<ProjectImages[] | any[]>([]);

  const imagesDefault = [{ url: "/images/default.svg", alt: "no-image" }];

  useEffect(() => {
    let documentSize = document.body.offsetWidth;
    let mobile = documentSize < 640;

    project.versions.forEach(v => {

      async function fetchImage() {

        await fetchImages(project.id, v.tag, mobile)
          .then(res => {

            let newObject = {
              version: v.tag,
              images: res.images
            };

            setImagesArr(prev => [...prev, newObject]);
          });
      }

      fetchImage();
    });
  }, []);

  return (
    <main id={project.name} className={styles.main}>
      <section className={styles.section}>

        <header className={styles.header}>
          <h1 className={styles.title}>{project.name}</h1>
          <h2 className={styles.subTitle}>
            {project.shortDescription}
          </h2>
        </header>

        <p>{project.resume}</p>

        {project.versions.map(version => (
          <details
            className={`${styles.details} ${selectedVersion == version.tag && styles.active}`}
            key={version.tag}
            onClick={() => setSelectedVersion(version.tag)}
            open={selectedVersion == version.tag}
          >
            <summary>{version.tag}</summary>

            <div
              className={styles.content}
            >
              <ProjectDetails filePath={version.description} />

              <ProjectGallery
                images={imagesArr.find(it => it.version == version.tag)?.images ?? imagesDefault}
              />

              <footer className={styles.footer}>
                <ProjectLinks version={version} />
              </footer>
            </div>
          </details>
        ))}
      </section>
    </main>
  );
}
