'use client';

import { services } from "@/data/services/services";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { ServiceModel } from "@/models/ServiceModel";

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
  const [active, setActive] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);

  const handleNavScroll = (direction?: number) => {

    let scrollSize = 0;
    let scroll = 0;

    if (navElementRef.current && active != undefined) {
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

    let newActive;

    if (type === 'item') {

      newActive = key;
      (open && active == key) && setOpen(false);

    } else {
      if (key == 1 && active != undefined && active < (services.length - 1)) // Botão da direita (Avançar)
        newActive = active + 1;
      else if (key == -1 && active != undefined && active > 0) // Botão da esquerda (Voltar)
        newActive = active - 1;
      else
        newActive = 0;


      handleNavScroll(key);
    }

    newActive != undefined && setActive(newActive);

  }

  const handleCloseDescription = () => {
    setActive(undefined);
    setOpen(false);
    router.push('/services');
  }

  useEffect(() => {
    handleNavScroll();

    if (active != undefined && services[active] != undefined) {
      router.push('/services#' + services[active].id);
      setOpen(true);
    }

  }, [active]);

  useEffect(() => {
    let hash = window.location.hash.split('#')[1] || '';
    let serviceIndex = services.indexOf(services.filter((item) => item.id === hash)[0]);

    serviceIndex >= 0 && setActive(serviceIndex);
  }, [params]);

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
            className={`${styles.button} ${open && active != undefined && active > 0 && styles.active}`}
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
                      className={`${styles.button} ${active === i && styles.active}`}
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

                <article className={`${styles.description} ${active === i && styles.active}`}>
                  <div>
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
                  </div>
                </article>

              </article>
            ))}
          </article>

          <button
            type="button"
            className={`${styles.button} ${open && active != undefined && active < (services.length - 1) && styles.active}`}
            onClick={() => handleService(1, 'button')}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

        </div>

      </section>
    </main>
  );
}
