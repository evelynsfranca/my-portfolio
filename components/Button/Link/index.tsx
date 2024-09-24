import Link from "next/link";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ButtonLinkProps {
    label: string;
    url: string;
    color: 'primary' | 'secondary';
    icon?: IconProp;
}

export default function ButtonLink(props: ButtonLinkProps) {

    const { label, url, color, icon } = props;

    const [linkColor, setLinkColor] = useState(`var(--${color}-color-text)`);

    return (
        <Link 
            href={url} 
            className={styles.linkButton}
            style={{ color: linkColor }}
            onMouseEnter={() => setLinkColor(`var(--${color}-color-text-hover)`)}
            onMouseLeave={() => setLinkColor(`var(--${color}-color-text)`)}
            target="_blank"
        >
            {label}
            <FontAwesomeIcon icon={icon || faArrowUpRightFromSquare} />
        </Link>
    );
}
