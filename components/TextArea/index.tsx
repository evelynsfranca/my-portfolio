"use client";

import styles from "./index.module.css";

export interface TextAreaProps {
    name: string;
    label: string;
    handler: (e: any) => void;
    rows: number;
}

export default function TextArea(props: TextAreaProps) {

    const { name, label, rows, handler } = props;

    return (
        <label className={styles.formLabel} htmlFor={name}>
            <span>{label}</span>
            <textarea
                className={styles.formInput}
                name={name}
                rows={rows}
                onChange={e => handler(e.target.value)}
            />
        </label>
    );
}
