import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

export interface ButtonBackProps {
    url?: string;
}

export default function ButtonBack(props: ButtonBackProps) {

    const { url } = props;

    const router = useRouter();

    const handleBack = () => url ? router.push(url) : router.back();

    return (
        <button
            className={styles.button}
            type="button"
            onClick={handleBack}
        >
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
        </button>
    );
}
