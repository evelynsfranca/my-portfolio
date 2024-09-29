'use client';

import ServiceCard from "./components";
import styles from "./index.module.css";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { services } from "@/mocks/services/services";
import ButtonLink from "@/components/Button/Link";

export default function ServicesSection() {

    const [slideIndex, setSlideIndex] = useState<number>(0);

    const handleSlide = (index: number) => {
        if (index < 0) {
            setSlideIndex(services.length - 1);
        } else if (index >= services.length) {
            setSlideIndex(0);
        } else {
            setSlideIndex(index);
        }
    };

    const handleLeft = (index: number) => {
        if (index > slideIndex) return `100%`;

        return index < slideIndex ? `-100%` : 0;
    };

    return (
        <section id="services" className={styles.section}>

            <header className={styles.header}>
                <h2>Serviços</h2>
            </header>

            <div className={styles.content}>

                <button
                    className={styles.button}
                    type="button"
                    onClick={() => handleSlide(slideIndex - 1)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <div className={styles.item}>
                    {services.map((it, i) => (
                        <ServiceCard
                            key={it.id}
                            id={it.id}
                            title={it.title}
                            description={it.description}
                            icon={it.icon}
                            style={{ left: handleLeft(i) }}
                        />
                    ))}
                </div>

                <button
                    className={styles.button}
                    type="button"
                    onClick={() => handleSlide(slideIndex + 1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>

            <footer>
                <ButtonLink
                    label="Ver serviços"
                    url="/services"
                    color="primary"
                    type="button"
                    target="_self"
                />
            </footer>

        </section>
    );
}
