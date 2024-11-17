'use client';

import { services } from "@/data/services/services";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";

export type ServiceAnimation = {
  transform: string;
  opacity: number;
}

export type MobileAnimation = {
  animation: string;
}

export default function Services() {

  const router = useRouter();
  const params = useParams();

  const navElementRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const handleNavScroll = (direction?: number) => {

    let scrollSize = 0;
    let scroll = 0;

    if (navElementRef.current) {
      scrollSize = navElementRef.current.getBoundingClientRect().width;
      scroll = direction 
                ? direction * scrollSize 
                : active > 0 
                  ? (active - 1) * scrollSize 
                  : 0;

      navElementRef.current.scroll({ left: scroll, behavior: 'smooth' });
    }
  }

  const handleService = (key: number, type: 'button' | 'item') => {
    setOpen(true);

    let newActive = 0;

    if (type === 'item') {

      newActive = key + 1;
      (open && active == key) && setOpen(false);

    } else {

      if (key == 1 && active < services.length) // Botão da direita (Avançar)
        newActive = active + 1;
      else if (key == -1 && active > 1) // Botão da esquerda (Voltar)
        newActive = active - 1;

      handleNavScroll(key);
    }
    setActive(newActive);

  }

  const handleCloseDescription = () => {
    setActive(0);
    setOpen(false);
    router.push('/services');
  }

  useEffect(() => {
    handleNavScroll();

    if (active) {
      router.push('/services#' + active);
      setOpen(true);
    }
  }, [active]);

  useEffect(() => {
    let hash = Number(window.location.hash.split('#')[1]) || 0;

    hash && setActive(hash);

  }, [params]);

  useEffect(() => {}, [params])

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
                id={it.id.toString()}
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

                  <article className={`${styles.description} ${active === it?.id && styles.active}`}>

                    <header>
                      <FontAwesomeIcon
                        icon={faX}
                        className={styles.closeIcon}
                        onClick={handleCloseDescription}
                      />
                    </header>

                    <article>
                      <header className={styles.header}>
                        <Image
                          className={styles.image}
                          src={it.image}
                          alt={it?.title}
                          height={0}
                          width={0}
                          sizes="100vw"
                        />

                        <h2 className={styles.title}>
                          {it?.title}
                        </h2>
                      </header>

                      <p dangerouslySetInnerHTML={{ __html: it?.description }} />
                    </article>
                  </article>
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
