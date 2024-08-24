"use client";

import styles from "./index.module.css";

export interface TextAreaProps {
    name: string;
    label: string;
    handler: (e: any) => void;
    rows: number;
    value: string | undefined;
}

export default function TextArea(props: TextAreaProps) {

    const { name, label, handler, value } = props;

    return (
        <label className={styles.formLabel} htmlFor={name}>
            <span>{label}</span>
            <textarea
                className={styles.formInput}
                onChange={e => handler(e.target.value)}
                name={name}
                value={value}
            />
        </label>
    );
}
