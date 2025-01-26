import ProjectSlider from "@/app/home/features/projects/components/ProjectSlider";
import ButtonLink from "@/components/Button/Link";
import { projects } from "@/data/projects/projects";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCardFeature";
import styles from "./index.module.css";

export default function ProjectsSection() {

    const [slideItems, setSlideItems] = useState<number>(0);
    const [contentLoaded, setContentLoaded] = useState<boolean>(false);

    useEffect(() => {
        let documentSize = document.body.offsetWidth;

        if (documentSize >= 1000)
            setSlideItems(3);
        else if (documentSize < 1000 && documentSize > 800)
            setSlideItems(2);
        else
            setSlideItems(1);

    }, []);

    return (
        <section id="projects" className={styles.section}>
            <article className={styles.article}>

                <header className={styles.header}>
                    <h2 className={styles.title}>Meus Projetos</h2>
                </header>

                <div className={styles.content}>
                    <ProjectSlider
                        cardClass="projectCard"
                        totalItems={7}
                        slideItemsQuantity={slideItems}
                        gridRows={1}
                        gridColumns={slideItems}
                        gridFlow="column"
                        gridGap={2}
                        contentLoaded={contentLoaded}
                    >
                        {projects.slice(0, 6).map((it, i) => (
                            <ProjectCard
                                key={i}
                                className="projectCard"
                                contentLoaded={(result) => setContentLoaded(result)}
                                {...it}
                            />
                        ))}

                        <div className={styles.verTodos}>
                            <ButtonLink
                                label="Ver todos"
                                url="/projetos"
                                color="secondary"
                                type="link"
                                target="_self"
                                icon={faChevronRight}
                            />
                        </div>
                    </ProjectSlider>
                </div>

            </article>
        </section>
    );
}
