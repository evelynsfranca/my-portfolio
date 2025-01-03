import ButtonLink from "@/components/Button/Link";
import { services } from "@/data/services/services";
import Link from "next/link";
import styles from "./index.module.css";

export default function ServicesList() {
  return (

    <aside className={styles.card}>

      <header className={styles.header}>
        <h3 className={styles.title}>Serviços ofertados</h3>
      </header>

      <ul className={styles.list}>

        {services.map(it => (
          <li
            key={it.id}
            className={styles.item}
          >
            <Link href={`/services#${it.id}`}>

              <h4 className={styles.text}>
                {it.title}
              </h4>

            </Link>
          </li>
        ))}

      </ul>

      <ButtonLink
        label="Ver todos os serviços"
        url="/services"
        color="secondary"
        type="link"
      />
    </aside>
  );
}
