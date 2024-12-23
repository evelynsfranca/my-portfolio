'use client';

import { services } from "@/data/services/services";
import ServiceCard from "./components/card/page";
import styles from "./page.module.css";

export default function Services() {

  return (
    <main id="services" className={styles.main}>

      <section className={styles.section}>

        <header className={styles.header}>

          <h1 className={styles.title}>Serviços</h1>

          <h2 className={styles.subTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio, consectetur dolorum atque quidem aliquid temporibus placeat tempora modi debitis. Eligendi quibusdam necessitatibus culpa labore explicabo, iste laudantium esse quisquam.
          </h2>

        </header>

        <div className={styles.content}>

          <article className={styles.items}>

            {services.map((it, i) => (
              <ServiceCard 
                key={it.id} 
                index={i} 
                service={it}
              />
            ))}

          </article>
        </div>
      </section>
    </main>
  );
}
