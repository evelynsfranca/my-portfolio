'use client';

import { services } from "@/data/services/services";
import ServiceCard from "./components/card";
import styles from "./page.module.css";
import ButtonLink from "@/components/Button/Link";

export default function Services() {

  return (
    <main id="services" className={styles.main}>

      <section className={styles.section}>

        <header className={styles.header}>

          <h1 className={styles.title}>Serviços</h1>

          <h2 className={styles.subTitle}>
            Abaixo estão listados os principais serviços prestados, mas, caso você queira tirar dúvidas sobre algum outro serviço que não esteja aparecendo ou caso queira mais informações, você pode entrar em contato clicando <ButtonLink color="secondary" label="aqui" type="link" url="/contact"/>.
          </h2>

        </header>

        <div className={styles.content}>

          <article className={styles.items}>

            {services.map((it, i) => (
              <ServiceCard 
                key={it.id} 
                itemId={services.indexOf(it)} 
                service={it}
              />
            ))}

          </article>
        </div>
      </section>
    </main>
  );
}
