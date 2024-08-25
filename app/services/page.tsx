'use client';

import { services } from "@/mocks/home/services";
import styles from "./page.module.css";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {

  const params = useParams();

  const [active, setActive] = useState<string>('1');

  useEffect(() => {
    const hash = window.location.hash.split('#')[1];
    hash != undefined && setActive(hash)
  }, [params])

  return (
    <main id="services" className={styles.main}>
      <section className={styles.section}>

        <header className={styles.header}>
          <h1 className={styles.title}>Serviços</h1>
          <h2 className={styles.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio, consectetur dolorum atque quidem aliquid temporibus placeat tempora modi debitis. Eligendi quibusdam necessitatibus culpa labore explicabo, iste laudantium esse quisquam.</h2>
        </header>

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <nav>
              {services.map(it => (
                <Link
                  key={it.id}
                  href={'#' + it.id}
                  className={`${active && active == it.id.toString() && styles.active} ${styles.sidebarItem}`}>
                  {it.title}
                </Link>
              ))}
            </nav>
          </aside>
          <article className={styles.description}>
            <header className={styles.descriptionHeader}>
              <FontAwesomeIcon
                icon={services[Number(active) - 1]?.icon}
                className={styles.descriptionIcon}
              />
              <h2 className={styles.descriptionTitle}>
                {services[Number(active) - 1]?.title}
              </h2>
            </header>
            <p dangerouslySetInnerHTML={{ __html: services[Number(active) - 1]?.description }}>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
