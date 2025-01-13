import ButtonLink from "@/components/Button/Link";
import Slider from "@/components/Slider";
import { projects } from "@/data/projects/projects";
import { useEffect, useState } from "react";
import ProjectCard from "./components/Card";
import styles from "./index.module.css";

export default function ProjectsSection() {

    const [slideItems, setSlideItems] = useState<number>(0);

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
                    <Slider
                        itemsList={projects.slice(0, 6)}
                        totalItems={projects.slice(0, 6).length + 1}
                        slideItemsQuantity={slideItems}
                        gridRows={1}
                        gridColumns={slideItems}
                        gridFlow="column"
                        gridGap={slideItems > 1 ? 2 : 0}
                        heightAutoAdjust={true}
                        cardClass="projectCard"
                    >
                        <>
                            {projects.slice(0, 6).map(it => (
                                <ProjectCard
                                    key={it.id}
                                    className="projectCard"
                                    {...it}
                                />
                            ))}

                            <ButtonLink
                                label="Ver todos"
                                url="/projetos"
                                color="secondary"
                                type="link"
                                target="_self"
                            />
                        </>
                    </Slider>
                </div>
                
            </article>
        </section>
    );
}
