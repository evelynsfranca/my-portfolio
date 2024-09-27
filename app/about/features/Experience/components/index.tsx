import styles from "./index.module.css";
import Image from "next/image";
import { ExperienceModel } from "@/models/ExperienceModel";

export type ExperienceCardProps = ExperienceModel;

export default function ExperienceCard(props: ExperienceCardProps) {

  const { year, image, description } = props;

  return (
    <article className={styles.card}>

      <div className={styles.effect} />
      
      <div className={styles.imageBox}>
        <div className={styles.image}>
          <Image
            src={image?.url}
            alt={image?.alt}
            height={0}
            width={0}
            sizes="100vw"
          />
        </div>
      </div>

      <div className={styles.text}>
        <h3>{year}</h3>
        <p>{description}</p>
      </div>

    </article>
  );
}
