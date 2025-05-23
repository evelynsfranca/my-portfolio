
import { fetchImages } from "@/app/projects/api";
import ButtonLink from "@/components/Button/Link";
import Loading from "@/components/Loading";
import { ProjectModel } from "@/models/ProjectModel";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export interface ProjectCardFeatureProps {
    className: string;
    contentLoaded: (result: boolean) => void;
}

export default function ProjectCardFeature(props: ProjectCardFeatureProps & ProjectModel) {

    const { id, name, shortDescription, versions, className, contentLoaded } = props;

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let documentSize = document.body.offsetWidth;
        let mobile = documentSize < 640;

        if (mobile)
            setShowDetails(true);
        
        async function fetchImage() {

            await fetchImages(id, versions[0].tag, mobile)
                .then(res => {
                    res.images?.length && setImage(res.images[0].url)
                });
        }

        fetchImage();
    }, []);


    useEffect(() => {
        if (image) {
            setLoading(false);
            contentLoaded(true);
        }
    }, [image]);

    return (
        <>
            {(loading || !image)
                ? (
                    <article
                        className={`${styles.card} ${className}`}
                        onMouseEnter={() => setShowDetails(true)}
                        onMouseLeave={() => setShowDetails(false)}
                    >
                        <Loading
                            message="Carregando dados do projeto..."
                            background="var(--background-secondary-color)"
                        />
                    </article>
                ) : (
                    <article
                        className={`${styles.card} ${className}`}
                        style={{ backgroundImage: `url(${image})` }}
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
                )}
        </>
    );
}
