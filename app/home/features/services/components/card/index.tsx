import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";

export interface ServiceCardFeatureProps {
    id: string;
    title: string;
    className: string;
    description: string;
    icon: IconProp;
}

export default function ServiceCardFeature(props: Readonly<ServiceCardFeatureProps>) {

    const { id, title, icon, className } = props;

    return (
        <article className={`${styles.card} ${className}`}>
            <Link
                href={"/servicos#" + id}
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
