import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";

export interface ServiceCardProps {
    id: string;
    title: string;
    className: string;
    description: string;
    icon: IconProp;
}

export default function ServiceCard(props: Readonly<ServiceCardProps>) {

    const { id, title, icon, className } = props;

    return (
        <article className={`${styles.card} ${className}`}>
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
            </Link>
        </article>
    );
}
