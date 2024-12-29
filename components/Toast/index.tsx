import { faCheck, faExclamationTriangle, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

export interface ToastProps {
  message: string;
  type: boolean;
  closeHandler: (e?: any) => void;
}

export default function Toast(props: ToastProps) {
  
  const { message, type, closeHandler } = props;

  return (
    <article className={styles.toast}>

      <div className={styles.content + ` ${type ? styles.ok : styles.nok}`}>
        <div className={styles.message}>
          
          <FontAwesomeIcon
            icon={type ? faCheck : faExclamationTriangle}
            className={styles.icon}
          />

          <span>{message}</span>

          <button
            className={styles.button}
            onClick={() => closeHandler(false)}
            type="button"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

        </div>
      </div>
      
    </article>
  );
}
