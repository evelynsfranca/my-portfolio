import { IconProp } from "@fortawesome/fontawesome-svg-core";
import ServiceCard from "./components";
import styles from "./index.module.css";
import {
    faChartSimple,
    faChevronLeft,
    faChevronRight,
    faComputer,
    faDesktop,
    faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export interface ServiceProps {
    title: string;
    description: string;
    icon: IconProp;
}

export default function ServicesSection() {
    const services: ServiceProps[] = [
        {
            title: "Service 1",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
            icon: faComputer,
        },
        {
            title: "Service 2",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
            icon: faDesktop,
        },
        {
            title: "Service 3",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
            icon: faTerminal,
        },
        {
            title: "Service 4",
            description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
            icon: faChartSimple,
        },
    ];

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
                            key={it.title}
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
        </section>
    );
}
