import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export interface ServiceCardProps {
    id: string;
    title: string;
    className: string;
    cardHeight: number;
    description: string;
    icon: IconProp;
}

export default function ServiceCard(props: Readonly<ServiceCardProps>) {

    const { id, title, icon, className, cardHeight } = props;

    const [height, setHeight] = useState<number>(0);
    
    useEffect(() => {
        setHeight(cardHeight);
    }, [cardHeight]);

    return (
        <article className={`${styles.card} ${className}`} style={{ minHeight: `${height}px` }}>
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
