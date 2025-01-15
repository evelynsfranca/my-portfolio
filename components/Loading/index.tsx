import { faSpinner, faSquareFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styles from "./index.module.css";

export interface LoadingProps {
  message?: string;
  background?: string;
}

export default function Loading(props: LoadingProps) {

  const { message, background } = props;

  const handleLoad = () => {
    const spinning = [
      { transform: "rotate(0)" },
      { transform: "rotate(360deg)" },
    ];

    const timing = {
      duration: 4000,
      iterations: Infinity
    };

    document.querySelector(".fa-spinner")?.animate(spinning, timing);
  }

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <article className={styles.loading}>

      <div
        className={styles.icon}
        style={{ color: background }}
      >
        <FontAwesomeIcon
          icon={faSpinner}
          mask={faSquareFull}
        />
      </div>

      <span className={styles.text}>
        {message ?? "Carregando..."}
      </span>

    </article>
  );
}
