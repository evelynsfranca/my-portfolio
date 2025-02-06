'use client';

import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

interface ProjectSliderProps {
    cardClass: string;
    totalItems: number;
    slideItemsQuantity: number;
    gridRows?: number;
    gridColumns?: number;
    gridFlow?: string;
    gridGap?: number;
    contentLoaded: boolean;
    children: React.ReactNode;
}

export default function ProjectSlider(props: ProjectSliderProps) {

    const { cardClass, totalItems, slideItemsQuantity, gridRows, gridColumns, gridFlow, gridGap, contentLoaded, children } = props;

    const slideRef = useRef<HTMLElement>(null);

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [slideStart, setSlideStart] = useState<boolean>(true);
    const [slideEnd, setSlideEnd] = useState<boolean>(false);
    const [buttonStartStyle, setButtonStartStyle] = useState<CSSProperties>();
    const [buttonEndStyle, setButtonEndStyle] = useState<CSSProperties>();

    const [cardHeight, setCardHeight] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    const [slideWidth, setSlideWidth] = useState<number>(0);

    let totalSlides = Math.ceil(totalItems / slideItemsQuantity);

    const handleSlide = useCallback((index: number) => {
        if (index < 0) {
            setSlideIndex(totalSlides - 1);
        } else if (index >= totalSlides) {
            setSlideIndex(0);
        } else {
            setSlideIndex(index);
        }
    }, [totalSlides]);

    const handleLeft = useCallback(() => {

        let scroll = 0;
        let scrollSize = 0;

        let gapWidth = gridGap && gridColumns
            ? ((gridGap * 16) + .5)
            : 0;

        if (slideRef.current) {
            scrollSize = slideRef.current.getBoundingClientRect().width + gapWidth;
            scroll = slideIndex
                ? slideIndex * scrollSize
                : 0;

            slideRef.current.scroll({ left: scroll, behavior: 'smooth' });
        }
    }, [slideIndex, gridGap, gridColumns, slideRef]);

    const handleSlideButtons = (condition: boolean, value: number) =>
        condition ? handleSlide(value) : false;

    useEffect(() => {
        handleLeft();

        slideIndex == 0
            ? setSlideStart(true)
            : setSlideStart(false);
        slideIndex == (totalSlides - 1) || totalSlides == 1
            ? setSlideEnd(true)
            : setSlideEnd(false);

    }, [slideIndex, slideItemsQuantity, handleLeft, totalSlides]);

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
        let itemSize = document.getElementsByClassName(cardClass);

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

    }, [slideItemsQuantity, cardClass]);

    useEffect(() => {
        setCardWidth(document.getElementsByClassName(cardClass)[0].clientWidth)
    }, []);

    useEffect(() => {
        setCardWidth(document.getElementsByClassName(cardClass)[0].clientWidth)
    }, [contentLoaded, cardWidth]);

    useEffect(() => {
        let gap = gridGap && gridColumns
            ? ((gridGap * 16) * (gridColumns - 1))
            : 0;

        let documentSize = document.body.offsetWidth;

        documentSize >= 670
            ? setSlideWidth((cardWidth * slideItemsQuantity) + gap)
            : setSlideWidth(cardWidth + gap);

    }, [cardHeight, cardWidth, gridGap, gridColumns, gridRows, slideItemsQuantity]);

    let maxHeight = 'none';
    let maxWidth = slideWidth;

    let templateRows = `repeat(${gridRows}, 1fr)` || 'none';
    let templateColumns = `repeat(${gridColumns}, 1fr)` || 'none';

    let autoFlow = gridFlow || 'none';
    let gap = `${gridGap}rem` || 0;

    return (
        <section className={styles.slider}>

            <button
                className={styles.button}
                type="button"
                onClick={() => handleSlideButtons(!slideStart, slideIndex - 1)}
                style={buttonStartStyle}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <article
                ref={slideRef}
                className={styles.slide}
                style={{
                    maxHeight: maxHeight,
                    maxWidth: maxWidth,
                    display: 'grid',
                    gridTemplateRows: templateRows,
                    gridTemplateColumns: templateColumns,
                    gridAutoFlow: autoFlow,
                    gap: gap
                }}
            >
                {children}
            </article>

            <button
                className={styles.button}
                type="button"
                onClick={() => handleSlideButtons(!slideEnd, slideIndex + 1)}
                style={buttonEndStyle}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </section>
    );
}
