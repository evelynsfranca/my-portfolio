'use client';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ServiceCard from "./components";
import styles from "./index.module.css";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { services } from "@/mocks/home/services";
import Link from "next/link";

export interface ServiceProps {
    id: number;
    title: string;
    description: string;
    icon: IconProp;
}

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
                    className={styles.slideButton}
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
                    className={styles.slideButton}
                    type="button"
                    onClick={() => handleSlide(slideIndex + 1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            
            <Link href={"/services"} className={styles.button}>Ver serviços</Link>
        </section>
    );
}
