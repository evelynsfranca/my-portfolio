import { technologiesList } from "@/data/technologies";
import { HabilityModel } from "@/models/HabilityModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "./index.module.css";

export interface SkillsTableProps {
  name: string;
  content: HabilityModel[];
}

export default function SkillsTable(props: Readonly<SkillsTableProps>) {

  const { name, content } = props;

  return (
    <table aria-hidden="true" className={styles.table}>

      <thead className={styles.head}>
        <tr>
          <td colSpan={2}>
            <span>{name}</span>
          </td>
        </tr>
      </thead>

      <tbody className={styles.body}>

        {content.map(it => (
          <tr key={it.name}>

            <td>
              {name == "Hard skills" &&
                technologiesList.filter(tech => tech.name == it.name)
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
                  ))}

              {it.name}
            </td>

            <td>
              <div
                className={styles.bar}
                style={{ width: `${it.average}%` }}
              >
                {it.average}%
              </div>
            </td>

          </tr>
        ))}

      </tbody>

    </table>
  );
}
