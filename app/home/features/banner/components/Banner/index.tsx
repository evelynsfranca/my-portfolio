
import ButtonLink from "@/components/Button/Link";
import { SlideModel } from "@/models/SlideModel";
import styles from "./index.module.css";

export interface BannerProps {
    className: string;
    index: number;
}

export default function Banner(props: BannerProps & SlideModel) {

    const { title, subtitle, backgroundImage, link, className, index } = props;

    return (
        <article
            className={`${styles.card} ${className}`}
            style={{ background: `url(${backgroundImage}) no-repeat center` }}
        >
            <h2 className={styles.title}>{title}</h2>

            <h3 className={styles.subTitle}>{subtitle}</h3>

            <ButtonLink
                url={link}
                color={index % 2 == 0 ? "primary" : "secondary"}
                label="SAIBA MAIS"
                type="button"
                icon="none"
                target="_self"
            />
        </article>
    );
}
