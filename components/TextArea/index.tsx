"use client";

import styles from "./index.module.css";

export interface TextAreaProps {
    label: string;
    name: string;
    value: string | undefined | '';
    placeholder: string;
    handler: (e: any) => void;
    onFocus: (e?: string) => void;
    rows: number;
}

export default function TextArea(props: TextAreaProps) {

    const { name, label, handler, value, placeholder, onFocus } = props;

    return (
        <label className={styles.formLabel}>
            <span>{label}</span>
            <textarea
                className={styles.formInput}
                name={name}
                value={value || ''}
                placeholder={placeholder}
                autoComplete="off"
                onChange={e => handler(e.target.value)}
                onFocus={() => onFocus()}
            />
        </label>
    );
}
