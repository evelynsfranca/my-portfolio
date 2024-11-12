'use client';

import { services } from "@/mocks/services/services";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faX } from "@fortawesome/free-solid-svg-icons";

export type ServiceAnimation = {
  transform: string;
  opacity: number;
}

export type MobileAnimation = {
  animation: string;
}

export default function Services() {

  const navElementRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleNavScroll = (direction?: number) => {

    let scrollSize = 0;
    let scroll = 0;

    if (navElementRef.current) {
      scrollSize = navElementRef.current.getBoundingClientRect().width;
      scroll = direction ? direction * scrollSize : (active - 1) * scrollSize;

      navElementRef.current.scroll({ left: scroll, behavior: 'smooth' });
    }
  }

  const handleService = (key: number, type: 'button' | 'item') => {
    setOpen(true);

    if (type === 'item') {
      (open && active == key) && setOpen(false);
      setActive(key + 1);
    } else {
      (key == 1 && active < services.length) // Botão da direita (Avançar)
        && setActive(active + 1); 
      (key == -1 && active > 1) // Botão da esquerda (Voltar)
        && setActive(active - 1); 

      handleNavScroll(key);
    }
  }

  const handleCloseDescription = () => {
    setActive(0);
    setOpen(false);
  }

  useEffect(() => {
    handleNavScroll();
  }, [active]);

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
          
          <button
            type="button"
            className={`${styles.button} ${open && active > 1 && styles.active}`}
            onClick={() => handleService(-1, 'button')}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <article
            ref={navElementRef}
            className={`${styles.items} ${open && styles.active}`}
          >

            {services.map((it, i) => (

              <article 
                key={it.id}
                className={styles.item}
              >

                <header>
                  <nav className={styles.nav}>
                    <button
                      key={it.id}
                      type="button"
                      className={`${styles.button} ${active === it.id && styles.active}`}
                      onClick={() => handleService(i, 'item')}
                    >
                      <FontAwesomeIcon
                        icon={it.icon}
                        className={styles.icon}
                      />
                      <span>{it.title}</span>
                    </button>
                  </nav>
                </header>

                {active === it?.id && (

                  <article className={`${styles.description} ${styles.active}`}>

                    <FontAwesomeIcon
                      icon={faX}
                      className={styles.closeIcon}
                      onClick={handleCloseDescription}
                    />

                    <header className={styles.header}>
                      <FontAwesomeIcon
                        icon={it?.icon}
                        className={styles.icon}
                      />
                      
                      <h2 className={styles.title}>
                        {it?.title}
                      </h2>
                    </header>

                    <p dangerouslySetInnerHTML={{ __html: it?.description }} />

                  </article>
                )}
              </article>
            ))}
          </article>

          <button
            type="button"
            className={`${styles.button} ${open && active < services.length && styles.active}`}
            onClick={() => handleService(1, 'button')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

        </div>

      </section>
    </main>
  );
}
