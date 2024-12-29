"use client";

import styles from "./index.module.css";

export interface InputTextProps {
    label: string;
    name: string;
    value: string | undefined | '';
    placeholder?: string;
    handler: (e: string) => void;
    onFocus: (e?: string) => void;
}

export default function InputText(props: InputTextProps) {

    const { name, label, handler, value, placeholder, onFocus } = props;

    return (
        <label className={styles.label}>

            <span>{label}</span>

            <input
                className={styles.input}
                type="text"
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
