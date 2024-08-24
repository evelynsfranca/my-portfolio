import styles from "./index.module.css";

export interface ButtonDefaultProps {
    label: string;
    handler: (e?: any) => void;
    disabled?: boolean;
}

export default function ButtonDefault(props: ButtonDefaultProps) {

    const { label, handler, disabled } = props;

    return (
        <button
            className={styles.button + ` ${disabled && styles.disabled}`}
            type="button"
            onClick={handler}
        >
            {label}
        </button>
    );
}
