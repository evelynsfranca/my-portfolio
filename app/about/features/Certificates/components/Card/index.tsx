import ButtonLink from "@/components/Button/Link";
import { CertificateInstitutionModel, CertificateModel } from "@/models/CertificateModel";
import Image from "next/image";
import styles from "./index.module.css";

export type CertificateCardProps = CertificateModel & { institution: CertificateInstitutionModel; itemClass: string; };

export default function CertificateCard(props: CertificateCardProps) {

  const { name, conclusion, image, institution, itemClass, link } = props;

  return (
    <article className={`${styles.card} ${itemClass}`}>

      <div className={styles.image}>
        <Image
          src={image?.url}
          alt={image?.alt}
          height={250}
          width={250}
          sizes="100vw"
        />
      </div>

      <div className={styles.content}>

        <p className={styles.name}>{name}</p>
        <p className={styles.institution}>{institution.name}</p>
        <p className={styles.conclusion}>{conclusion}</p>
        
        {link && (
          <ButtonLink
            url={link}
            type="link"
            label="Ver certificado"
            color="secondary"
          />
        )}

      </div>
    </article>
  );
}
