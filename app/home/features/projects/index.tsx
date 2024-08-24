import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import projectImage from '@/public/images/01-city.jpg';

export default function ProjectsSection() {
    return (
        <section id="projects" className={styles.section}>
            
            <article className={styles.article}>

                <header className={styles.header}>
                    <h2>Meus Projetos</h2>
                </header>

                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut reiciendis amet cupiditate eum ipsa doloribus, sequi, quasi laboriosam soluta facilis natus voluptatem hic quo numquam blanditiis iure eius reprehenderit.</p>
                </div>

                <Link href="/projects" className={styles.button}>Ver projetos</Link>
                
            </article>

            <article className={styles.article}>
                <Image src={projectImage} alt="projects-image" />
            </article>

        </section>
    );
}
