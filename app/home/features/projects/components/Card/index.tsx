
import ButtonLink from "@/components/Button/Link";
import { ProjectModel } from "@/models/ProjectModel";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export interface ProjectCardProps {
    className: string;
}

export default function ProjectCard(props: ProjectCardProps & ProjectModel) {

    const { id, name, link, shortDescription, images, className } = props;

    const [showDetails, setShowDetails] = useState<boolean>(false);

    const projectImage =
        images != undefined && images.length > 0
            ? images[0].url
            : '/images/default.svg';

    useEffect(() => {
        let documentSize = document.body.offsetWidth;

        if (documentSize <= 640)
            setShowDetails(true);
    }, []);

    return (
        <article
            className={`${styles.card} ${className}`}
            style={{ background: `url(${projectImage}) no-repeat center` }}
            onMouseEnter={() => setShowDetails(true)}
            onMouseLeave={() => setShowDetails(false)}
        >
            <div style={{ opacity: showDetails ? .8 : 0 }}>

                <header className={styles.header}>
                    <h3 className={styles.title}>{name}</h3>
                </header>

                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: shortDescription }}
                />

                <footer className={styles.footer}>
                    <ButtonLink
                        label="Detalhes"
                        url={"/projects/" + id}
                        color="secondary"
                        type="link"
                        icon="none"
                        target="_self"
                    />
                    <ButtonLink
                        label="Visitar"
                        url={link}
                        color="primary"
                        type="link"
                        icon="default"
                    />
                </footer>
            </div>
        </article>
    );
}
