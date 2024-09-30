'use client';

import { services } from "@/mocks/services/services";
import styles from "./page.module.css";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Services() {

  const params = useParams();
  const router = useRouter();

  const [active, setActive] = useState<number>(1);
  const [itemSize, setItemSize] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(0);
  const [navEnd, setNavEnd] = useState<boolean>(false);
  const [navStart, setNavStart] = useState<boolean>(false);
  const [navElement, setNavElement] = useState<Element | null>(null);
  const [navScroll, setNavScroll] = useState<number>(0);

  const handleNavigationClassName = (id: number) =>
    `${active && active == id && styles.active} ${styles.item}`;

  const handleNavScroll = (value?: number) => {

    let scroll;
    let currentScroll;

    if (navElement) {
      currentScroll = navElement.scrollLeft;
      scroll = value == 0
        ? currentScroll - itemSize
        : itemSize + currentScroll;

      scroll = scroll >= 0 ? scroll : 0;

      navElement.scroll({ left: scroll, top: 0, behavior: 'smooth' });
    }
    scroll && setNavScroll(scroll);

    if (value == 1 && active < services.length) 
      setActive(active + value);
    else if (value == 0 && active > 1)
      setActive(active - 1);

  }

  const handleNavButtons = () => {
    navScroll <= 1
      || (active != null && active == 0)
      ? setNavStart(true)
      : setNavStart(false); // Se for começo da galeria

    navScroll >= (itemSize * services.length)
      || (active != null && active >= 0 && active == services.length)
      ? setNavEnd(true)
      : setNavEnd(false); // Se for o fim da galeria
  }

  useEffect(() => {
    const hash = window.location.hash.split('#')[1];
    hash != undefined && setActive(Number(hash));
  }, [params]);

  useEffect(() => {
    router.push('/services#' + active);
  }, [active]);

  useEffect(() => { // Atualiza a visualização dos botões de scroll da navegação
    handleNavButtons();
  }, [navScroll, itemSize, active]);

  useEffect(() => {
    let element = document.getElementsByClassName(styles.nav).length
      ? document.getElementsByClassName(styles.nav)[0]
      : null;

    let size = element && element.getBoundingClientRect().width;
    size != undefined && setItemSize(size);

    setNavElement(element);

    let docSize = document.getElementsByTagName('body')[0]?.getBoundingClientRect().width;
    docSize && setPageSize(docSize);
  }, []);

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

          <aside className={styles.sidebar}>

            <button
              type="button"
              className={styles.navButton}
              style={{ opacity: !navStart && pageSize <= 800 ? 1 : 0 }}
              onClick={() => handleNavScroll(0)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <nav className={styles.nav}>
              {services.map(it => (
                <Link
                  key={it.id}
                  href={'#' + it.id}
                  className={handleNavigationClassName(it.id)}
                  style={{ minWidth: `${itemSize}px` }}
                >
                  {it.title}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className={styles.navButton}
              style={{ opacity: !navEnd && pageSize <= 800 ? 1 : 0 }}
              onClick={() => handleNavScroll(1)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

          </aside>

          <article className={styles.description}>

            <header className={styles.header}>

              <FontAwesomeIcon
                icon={services[active - 1]?.icon}
                className={styles.icon}
              />

              <h2 className={styles.title}>
                {services[active - 1]?.title}
              </h2>

            </header>

            <p dangerouslySetInnerHTML={{ __html: services[active - 1]?.description }} />

          </article>

        </div>
      </section>
    </main>
  );
}
