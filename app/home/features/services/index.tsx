'use client';

import ButtonLink from "@/components/Button/Link";
import { services } from "@/data/services/services";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "./components/card";
import styles from "./index.module.css";

interface ButtonStyle {
    cursor: string;
    opacity: number;
}

export default function ServicesSection() {

    const slideRef = useRef<HTMLElement>(null);

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [slideItems, setSlideItems] = useState<number>(0);
    const [cardHeight, setCardHeight] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    const [slideStart, setSlideStart] = useState<boolean>(true);
    const [slideEnd, setSlideEnd] = useState<boolean>(false);
    const [buttonStartStyle, setButtonStartStyle] = useState<ButtonStyle>();
    const [buttonEndStyle, setButtonEndStyle] = useState<ButtonStyle>();
    const [documentSize, setDocumentSize] = useState<number>(0);
    const [itemsHeight, setItemsHeight] = useState<number>(0);
    const [itemsWidth, setItemsWidth] = useState<number>(0);

    let totalSlides = Math.ceil(services.length / slideItems);

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
        slideIndex == (totalSlides - 1) || totalSlides == 1
            ? setSlideEnd(true)
            : setSlideEnd(false);

    }, [slideIndex, slideItems]);

    useEffect(() => {

        slideStart
            ? setButtonStartStyle({
                opacity: 0,
                cursor: 'default'
            })
            : setButtonStartStyle({
                opacity: 1,
                cursor: 'pointer'
            });

        slideEnd
            ? setButtonEndStyle({
                opacity: 0,
                cursor: 'default'
            })
            : setButtonEndStyle({
                opacity: 1,
                cursor: 'pointer'
            });

    }, [slideStart, slideEnd]);

    useEffect(() => {

        let height = 0;
        let width = 0;
        let itemSize = document.getElementsByClassName("serviceCard");

        Array.prototype.filter.call(
            itemSize,
            (it, _i) => it.getBoundingClientRect().height > height
                ? height = it.getBoundingClientRect().height
                : false
        );
        Array.prototype.filter.call(
            itemSize,
            (it, _i) => it.getBoundingClientRect().width > width
                ? width = it.getBoundingClientRect().width
                : false
        );

        setCardHeight(height);
        setCardWidth(width);

    }, [slideItems]);
    
    useEffect(() => {
        setItemsHeight(cardHeight * 2);
        
        documentSize >= 670 
            ? setItemsWidth(cardWidth * 2) 
            : setItemsWidth(cardWidth);

    }, [cardHeight, cardWidth]);
    
    useEffect(() => {
        documentSize >= 670
            ? setSlideItems(4)
            : setSlideItems(2);
    }, [documentSize]);

    useEffect(() => {
        setDocumentSize(document.body.offsetWidth);
    }, []);

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
                    style={buttonStartStyle}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <article
                    ref={slideRef}
                    className={styles.item}
                    style={{ 
                        maxHeight: `${itemsHeight}px`, 
                        maxWidth: `${itemsWidth}px` 
                    }}
                >
                    {services.map((it, i) => (
                        <ServiceCard
                            key={it.id}
                            id={it.id}
                            title={it.title}
                            description={it.description}
                            icon={it.icon}
                            className="serviceCard"
                        />
                    ))}
                </article>

                <button
                    className={styles.button}
                    type="button"
                    onClick={() => slideEnd
                        ? false
                        : handleSlide(slideIndex + 1)}
                    style={buttonEndStyle}
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
