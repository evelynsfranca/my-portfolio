
import styles from "./index.module.css";
import Image from "next/image";
import defaultProjectImage from '@/public/images/default.svg';
import { ProjectModel } from "@/models/ProjectModel";
import ButtonLink from "@/components/Button/Link";

export type ProjectCardProps = ProjectModel;

export default function ProjectCard(props: Readonly<ProjectCardProps>) {

    const { id, name, link, shortDescription, images } = props;

    const projectImage = images != undefined && images.length > 0 ? images[0].url : defaultProjectImage;

    return (
        <article className={styles.card}>

            <header className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{name}</h3>
            </header>

            <div className={styles.cardImage}>
                <Image
                    src={projectImage}
                    alt={`Imagem do projeto ${name}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>

            <div
                className={styles.cardDescription}
                dangerouslySetInnerHTML={{ __html: shortDescription }}
            />

            <footer className={styles.cardFooter}>
                <ButtonLink
                    label="Detalhes"
                    url={"/projects/" + id}
                    color="primary"
                    type="button"
                    icon="none"
                    target="_self"
                />
                <ButtonLink
                    label="Visitar"
                    url={link}
                    color="secondary"
                    type="button"
                    icon="default"
                />
            </footer>

        </article>
    );
}
