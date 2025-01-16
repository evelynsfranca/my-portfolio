"use client";

import ButtonLink from "@/components/Button/Link";
import { projectFlags } from "@/data/projects/projectFlags";
import { projectTypes } from "@/data/projects/projectTypes";
import { ProjectModel } from "@/models/ProjectModel";
import { useEffect, useState } from "react";
import { fetchImages } from "../../api";
import styles from "./index.module.css";
import Loading from "@/components/Loading";

export type ProjectCardProps = ProjectModel;

export default function ProjectCard(props: Readonly<ProjectCardProps>) {

    const { id, name, shortDescription, versions, flag } = props;

    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let documentSize = document.body.offsetWidth;
        let mobile = documentSize <= 640;

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
        image && setLoading(false);
    }, [image]);

    const type = versions[0].type;

    return (
        <>
            {(loading || !image)
                ? (
                    <article
                    className={styles.card}
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
                        className={styles.card}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "auto 100%"
                        }}
                        onMouseEnter={() => setShowDetails(true)}
                        onMouseLeave={() => setShowDetails(false)}
                    >
                        <div style={{ opacity: showDetails ? .9 : 0 }}>

                            <header className={styles.header}>
                                <h3 className={styles.title}>{name}</h3>
                            </header>

                            <div
                                className={styles.description}
                                dangerouslySetInnerHTML={{ __html: shortDescription }}
                            />

                            <div className={styles.tags}>
                                <span
                                    className={styles.type}
                                    style={{ backgroundColor: projectTypes.filter(it => it.name == type)[0].color }}
                                >
                                    {type}
                                </span>

                                <span
                                    className={styles.flag}
                                    style={{ backgroundColor: projectFlags.filter(it => it.name == flag)[0].color }}
                                >
                                    {flag}
                                </span>
                            </div>

                            <footer className={styles.footer}>

                                <ButtonLink
                                    label="Detalhes"
                                    url={"/projetos/" + id}
                                    color="secondary"
                                    type="link"
                                    icon="none"
                                    target="_self"
                                />
                                <ButtonLink
                                    label="Visitar"
                                    url={versions.findLast(it => it)?.links?.app ?? "www.evelynfranca.com"}
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