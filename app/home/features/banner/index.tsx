'use client';

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faCircle
} from "@fortawesome/free-solid-svg-icons";
import { slides } from "@/data/home/slides";
import ButtonLink from "@/components/Button/Link";

export default function BannerSection() {

    const [slideIndex, setSlideIndex] = useState<number>(0);

    const handleSlide = (index: number) => {
        if (index < 0) {
            setSlideIndex(slides.length - 1);
        } else if (index >= slides.length) {
            setSlideIndex(0);
        } else {
            setSlideIndex(index);
        }
    };

    const handleLeft = (index: number) => {
        if (index > slideIndex) return `100%`;

        return index < slideIndex ? `-100%` : 0;
    }

    const handleBannerContentStyle = (index: number) => {
        const active = index === slideIndex && styles.active;
        return styles.content + " " + active;
    }

    const handleBannerButtonsStyle = (index: number) => {
        const active = index === slideIndex && styles.active;
        return styles.button + " " + active;
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => handleSlide(slideIndex + 1), 7000);
        return () => clearTimeout(timeoutId);
    }, [handleSlide, slideIndex]);


    return (
        <section className={styles.section}>
            <div>

                <button
                    className={styles.arrowButton}
                    type="button"
                    onClick={() => handleSlide(slideIndex - 1)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <div className={styles.banner}>
                    
                    {slides.map((it, i) => (
                        <div
                            key={it.title}
                            className={handleBannerContentStyle(i)}
                            style={{
                                left: handleLeft(i),
                                backgroundImage: `url(${it.backgroundImage})`
                            }}
                        >
                            <h2 className={styles.title}>{it.title}</h2>
                            <h3 className={styles.subTitle}>{it.subtitle}</h3>
                            <ButtonLink 
                                url={it.link}
                                color={i % 2 == 0 ? "primary" : "secondary"}
                                label="SAIBA MAIS"
                                type="button"
                                icon="none"
                                target="_self"
                            />
                        </div>
                    ))}


                    <div className={styles.buttons}>
                        <div>
                        {slides.map((it, i) => (
                            <button
                                key={it.title}
                                className={handleBannerButtonsStyle(i)}
                                onClick={() => handleSlide(i)}
                            >
                                <FontAwesomeIcon icon={faCircle} />
                            </button>
                        ))}
                        </div>
                    </div>

                </div>


                <button
                    className={styles.arrowButton}
                    type="button"
                    onClick={() => handleSlide(slideIndex + 1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
        </section>
    );
}
