"use client";

import styles from "./index.module.css";

export interface ButtonDefaultProps {
    label: string;
    handler: (e: any) => void;
}

export default function ButtonDefault(props: ButtonDefaultProps) {

    const { label, handler } = props;

    return (
        <button
            className={styles.button}
            type="button"
            onClick={handler}
        >
            {label}
        </button>
    );
}
