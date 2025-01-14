import { ProjectImageModel } from "@/models/ProjectModel";
import { useState } from "react";
import ProjectCarousel from "./components/Carousel";
import ProjectMiniatures from "./components/Miniatures";
import styles from "./index.module.css";

export interface ProjecGalleryProps {
  images: ProjectImageModel[];
}

export default function ProjecGallery(props: ProjecGalleryProps) {

  const { images } = props;

  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [showImages, setShowImages] = useState<boolean>(false);

  return (
    <article className={styles.images}>

      <header>
        <h2 className={styles.title}>Galeria</h2>
      </header>

      <ProjectMiniatures
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        showImages={showImages}
        setShowImages={setShowImages}
      />
      <ProjectCarousel
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        showImages={showImages}
        setShowImages={setShowImages}
      />
    </article>

  );
}
