'use client';

import ButtonLink from "@/components/Button/Link";
import { ServiceModel } from "@/models/ServiceModel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export interface ServiceCardProps {
  itemId: number;
  service: ServiceModel;
}

export default function ServiceCard(props: ServiceCardProps) {

  const { itemId, service } = props;

  const cardRef = useRef<HTMLElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (cardRef.current
      && (cardRef.current?.getBoundingClientRect().top <= window.innerHeight - 150
        || cardRef.current?.getBoundingClientRect().bottom <= window.innerHeight)) {
      cardRef.current.classList.add(styles.active);
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(document.body.scrollTop);
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article
      className={styles.card}
      id={service.id.toString()}
      ref={cardRef}
    >
      <article className={styles.description}>
        <div>
          <article>
            <header className={styles.header}>
              <Image
                className={styles.image}
                src={service.image}
                alt={service?.title}
                height={0}
                width={0}
                sizes="100vw"
              />

              <h2 className={styles.title}>
                {service?.title}
              </h2>
            </header>

            <div>
              <p dangerouslySetInnerHTML={{ __html: service?.description }} />

              <ButtonLink
                color={itemId % 2 > 0 ? "primary" : "secondary"}
                label="Solicitar orçamento"
                type="button"
                url={`/contact?service=${service.id}`}
                target="_self"
              />
            </div>
          </article>
        </div>
      </article>
    </article>
  );
}
