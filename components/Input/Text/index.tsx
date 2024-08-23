"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";

export interface InputTextProps {
    name: string;
    label: string;
    handler: (e: any) => void;
}

export default function InputText(props: InputTextProps) {

    const { name, label, handler } = props;

    return (
        <label className={styles.formLabel} htmlFor={name}>
            <span>{label}</span>
            <input
                className={styles.formInput}
                name={name}
                type="text"
                onChange={e => handler(e.target.value)}
            />
        </label>
    );
}
