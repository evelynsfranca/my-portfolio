import { faCheck, faExclamationTriangle, faHeart, faX, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ToastProps {
  message: string;
  type: boolean;
  closeHandler: (e?: any) => void;
}

export default function Toast(props: ToastProps) {
  const { message, type, closeHandler } = props;

  return (
    <article className={styles.toast}>
      <div className={styles.toastContent + ` ${type ? styles.ok : styles.nok}`}>
        <FontAwesomeIcon 
          icon={type ? faCheck : faExclamationTriangle}
          className={styles.toastIcon}
        />
        <div className={styles.message}>
          {message}
        </div>
        <button 
          className={styles.toastButton} 
          onClick={() => closeHandler(false)}
          type="button"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </article>
  );
}
