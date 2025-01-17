import { technologiesList } from "@/data/technologies";
import { ExperienceModel } from "@/models/ExperienceModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export type ExperienceCardProps = ExperienceModel;

export default function ExperienceCard(props: ExperienceCardProps) {

  const { title, year, image, link, description, technologies } = props;

  return (
    <article className={styles.card}>

      <header className={styles.draw}>
        <div className={styles.effect} />

        <div className={styles.imageBox}>
          <div className={styles.image}>
            <Image
              src={image?.url}
              alt={image?.alt}
              height={0}
              width={0}
              sizes="100vw"
            />
          </div>
        </div>
      </header>

      <div className={styles.content}>

        <div>
          {link
            ? (
              <Link href={link} target="_blank">
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.year}>{year}</h3>
              </Link>
            ) : (
              <>
                <h3 className={styles.title}>{title}</h3>
                <h3 className={styles.year}>{year}</h3>
              </>
            )
          }
        </div>

        <div>
          <p className={styles.description}>{description}</p>

          <div className={styles.icons}>

            {technologies
              && technologies?.length > 0
              && technologies
                .map((it) =>
                  technologiesList
                    .filter(j => j.name === it)
                    .map(k => (
                      <div
                        key={k.name}
                        aria-label={k.name}
                        className={styles.icon}
                      >
                        {typeof k.icon == "string"
                          ? (
                            <Image
                              key={k.name}
                              src={k.icon}
                              alt={k.name}
                              height={20}
                              width={20}
                              sizes="100vw"

                            />)
                          : (
                            <FontAwesomeIcon
                              key={k.name}
                              style={{ color: k.color }}
                              icon={k.icon}
                            />
                          )}
                      </div>
                    ))
                )
            }
          </div>
        </div>
      </div>
    </article>
  );
}
