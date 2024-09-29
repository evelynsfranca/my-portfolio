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

    const { id, title, description, icon, style } = props;

    return (
        <article className={styles.card} style={style}>
            <Link
                href={"/services#" + id} 
                className={styles.link}  
            >
                <header className={styles.header}>

                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={icon} />
                    </div>

                    <h3 className={styles.title}>
                        {title}
                    </h3>

                </header>

                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: description }} 
                />
            </Link>
        </article >
    );
}
