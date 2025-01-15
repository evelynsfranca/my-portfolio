import { fetchImages } from "@/app/projects/api";
import Loading from "@/components/Loading";
import { ProjectImageModel } from "@/models/ProjectModel";
import { useEffect, useState } from "react";
import ProjectCarousel from "./components/Carousel";
import ProjectMiniatures from "./components/Miniatures";
import styles from "./index.module.css";

export interface ProjecGalleryProps {
  projectId: string;
  versionTag: string;
}

export default function ProjecGallery(props: ProjecGalleryProps) {

  const { projectId, versionTag } = props;

  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [showImages, setShowImages] = useState<boolean>(false);
  const [imagesArr, setImagesArr] = useState<ProjectImageModel[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    let documentSize = document.body.offsetWidth;
    let mobile = documentSize < 640;

    async function fetchImage() {

      await fetchImages(projectId, versionTag, mobile)
        .then(res => {
          setImagesArr(res.images);
          setLoading(false);
        });
    }

    fetchImage();

  }, []);

  useEffect(() => {
    imagesArr && setLoading(false);
  }, [imagesArr]);

  return (
    <article className={styles.images}>

      <header>
        <h2 className={styles.title}>Galeria</h2>
      </header>

      {(loading || !imagesArr)
        ? (
          <Loading 
            message="Carregando as imagens do projeto..." 
            background="var(--background-secondary-color)"
          />
        ) : (
          <>
            <ProjectMiniatures
              images={imagesArr}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              showImages={showImages}
              setShowImages={setShowImages}
            />
            <ProjectCarousel
              images={imagesArr}
              imageIndex={imageIndex}
              setImageIndex={setImageIndex}
              showImages={showImages}
              setShowImages={setShowImages}
            />
          </>
        )}
    </article>

  );
}
