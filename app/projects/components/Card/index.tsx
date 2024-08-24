
import styles from "./index.module.css";
import Image from "next/image";
import projectImage from '@/public/images/02-office.jpg';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export interface ProjectCardProps {
    id: number
    name: string
    description: string
    link: string
}

export default function ProjectCard(props: Readonly<ProjectCardProps>) {
    return (
        <article className={styles.card}>
            <header className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{props.name}</h3>
            </header>
            <div className={styles.cardImage}>
                <Image src={projectImage} alt="" />
            </div>
            <div className={styles.cardDescription}>{props.description}</div>
            <footer className={styles.cardFooter}>
                <Link href={"/project/" + props.id} className={styles.cardButton}>Detalhes</Link>
                <Link href={props.link} className={styles.cardButton} target="_blank">
                    <span>Visitar</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> 
                </Link>
            </footer>
        </article>
    );
}
