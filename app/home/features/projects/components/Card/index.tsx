
import { fetchImages } from "@/app/projects/api";
import ButtonLink from "@/components/Button/Link";
import { ProjectModel } from "@/models/ProjectModel";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export interface ProjectCardProps {
    className: string;
}

export default function ProjectCard(props: ProjectCardProps & ProjectModel) {

    const { id, name, shortDescription, versions, className } = props;

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        let documentSize = document.body.offsetWidth;

        if (documentSize <= 640)
            setShowDetails(true);

        async function fetchImage() {
            const data = await fetchImages(id, versions[0].tag);
            setImage(data?.images ? data?.images[0]?.url : "");
        }

        fetchImage();
    }, []);

    return (
        <article
            className={`${styles.card} ${className}`}
            style={{ background: `url(${image}) no-repeat center` }}
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
                        url={versions[0].links.app ?? "www.evelynfranca.com"}
                        color="primary"
                        type="link"
                        icon="default"
                    />
                </footer>
            </div>
        </article>
    );
}
