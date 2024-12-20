'use client';

import ButtonLink from "@/components/Button/Link";
import { services } from "@/data/services/services";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./components";
import styles from "./index.module.css";

export default function ServicesSection() {

    const slideRef = useRef<HTMLElement>(null);

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [cardHeight, setCardHeight] = useState<number>(0);
    const [slideStart, setSlideStart] = useState<boolean>(true);
    const [slideEnd, setSlideEnd] = useState<boolean>(false);
    let documentSize = document.body.offsetWidth;

    let totalSlides = Math.ceil(services.length / 4);

    const handleSlide = (index: number) => {
        if (index < 0) {
            setSlideIndex(totalSlides - 1);
        } else if (index > totalSlides) {
            setSlideIndex(0);
        } else {
            setSlideIndex(index);
        }
    };

    const handleLeft = () => {

        let scroll = 0;
        let scrollSize = 0;

        if (slideRef.current) {
            scrollSize = slideRef.current.getBoundingClientRect().width;
            scroll = slideIndex
                ? slideIndex * scrollSize
                : 0;

            slideRef.current.scroll({ left: scroll, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleLeft();

        slideIndex == 0
            ? setSlideStart(true)
            : setSlideStart(false);
        slideIndex == totalSlides
            ? setSlideEnd(true)
            : setSlideEnd(false);

    }, [slideIndex]);

    useEffect(() => {

        let height = 0;
        let itemSize = document.getElementsByClassName("serviceCard");

        Array.prototype.filter.call(
            itemSize,
            (it, _i) => it.getBoundingClientRect().height > height
                ? height = it.getBoundingClientRect().height
                : false
        );

        console.log(height)

        setCardHeight(height);
    }, []);

    useEffect(() => console.log(documentSize), [documentSize])
    

    return (
        <section id="services" className={styles.section}>

            <header className={styles.header}>
                <h2>Serviços</h2>
            </header>

            <div className={styles.content}>

                <button
                    className={styles.button}
                    type="button"
                    onClick={() => slideStart
                        ? false
                        : handleSlide(slideIndex - 1)}
                    style={{
                        opacity: slideStart ? 0 : 1,
                        cursor: slideStart ? 'default' : 'pointer'
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <article
                    ref={slideRef}
                    className={styles.item}
                    style={{ maxHeight: `${(cardHeight * 7)}px` }}
                >
                    {services.map((it, i) => (
                        <ServiceCard
                            key={it.id}
                            id={it.id}
                            title={it.title}
                            description={it.description}
                            icon={it.icon}
                            className="serviceCard"
                            cardHeight={cardHeight}
                        />
                    ))}
                </article>

                <button
                    className={styles.button}
                    type="button"
                    onClick={() => slideEnd
                        ? false
                        : handleSlide(slideIndex + 1)}
                    style={{
                        opacity: slideEnd ? 0 : 1,
                        cursor: slideEnd ? 'default' : 'pointer'
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>

            <footer>
                <ButtonLink
                    label="Ver todos os serviços"
                    url="/services"
                    color="primary"
                    type="button"
                    target="_self"
                />
            </footer>

        </section>
    );
}
