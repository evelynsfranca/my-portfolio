'use client';

import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

interface ButtonStyle {
    cursor: string;
    opacity: number;
}

interface CardSliderProps {
    itemsList: any[];
    itemsHeight?: number;
    itemsWidth?: number;
    slideItemsQuantity: number;
    gridRows: string | number | undefined;
    gridColumns: string | number | undefined;
    gridFlow: string;
    children: React.ReactNode;
}

export default function CardSlider(props: CardSliderProps) {

    const { itemsList, itemsHeight, itemsWidth, slideItemsQuantity, gridRows, gridColumns, gridFlow, children } = props;

    const slideRef = useRef<HTMLElement>(null);

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [slideStart, setSlideStart] = useState<boolean>(true);
    const [slideEnd, setSlideEnd] = useState<boolean>(false);
    const [buttonStartStyle, setButtonStartStyle] = useState<ButtonStyle>();
    const [buttonEndStyle, setButtonEndStyle] = useState<ButtonStyle>();

    let totalSlides = Math.ceil(itemsList.length / slideItemsQuantity);

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
        totalSlides && (slideIndex == (totalSlides - 1) || totalSlides == 1)
            ? setSlideEnd(true)
            : setSlideEnd(false);

    }, [slideIndex, slideItemsQuantity]);

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


    return (
        <section className={styles.slider}>

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
                className={styles.slide}
                style={{
                    maxHeight: `${itemsHeight}px`,
                    maxWidth: `${itemsWidth}px`,
                    gridTemplateRows: gridRows,
                    gridTemplateColumns: gridColumns,
                    gridAutoFlow: gridFlow
                }}
            >
                {children}
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

        </section>
    );
}
