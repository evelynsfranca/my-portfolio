"use client";

import styles from "./index.module.css";

export interface InputTextProps {
    name: string;
    label: string;
    handler: (e: string) => void;
    value: string | undefined | '';
}

export default function InputText(props: InputTextProps) {

    const { name, label, handler, value } = props;

    return (
        <label className={styles.formLabel}>
            <span>{label}</span>
            <input
                className={styles.formInput}
                type="text"
                onChange={e => handler(e.target.value)}
                name={name}
                value={value || ''}
                autoComplete="off"
            />
        </label>
    );
}
