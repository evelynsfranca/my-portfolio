import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties } from "react";
import Link from "next/link";

export interface ServiceCardProps {
    id: number;
    title: string;
    description: string;
    icon: IconProp;
    style: CSSProperties;
}

export default function ServiceCard(props: Readonly<ServiceCardProps>) {
    return (
        <article className={styles.card} style={props.style}>
            <Link
                href={"/services#" + props.id} 
                className={styles.link}  
            >
                <header className={styles.cardHeader}>
                    <div className={styles.cardIcon}><FontAwesomeIcon icon={props.icon} /></div>
                    <h3 className={styles.cardTitle}>{props.title}</h3>
                </header>
                <div
                    className={styles.cardDescription}
                    dangerouslySetInnerHTML={{ __html: props.description }} />
            </Link>
        </article >
    );
}
