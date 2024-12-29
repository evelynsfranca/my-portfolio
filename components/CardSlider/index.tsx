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
    totalItems?: number;
    itemsHeight?: number;
    itemsWidth?: number;
    slideItemsQuantity: number;
    gridRows?: number;
    gridColumns?: number;
    gridFlow?: string;
    gridGap?: number;
    cardClass: string;
    heightAutoAdjust?: boolean;
    widthAutoAdjust?: boolean;
    children: React.ReactNode;
}

export default function CardSlider(props: CardSliderProps) {

    const { itemsList, cardClass, totalItems, itemsHeight, itemsWidth, slideItemsQuantity, gridRows, gridColumns, gridFlow, gridGap, widthAutoAdjust, heightAutoAdjust, children } = props;

    const slideRef = useRef<HTMLElement>(null);

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [slideStart, setSlideStart] = useState<boolean>(true);
    const [slideEnd, setSlideEnd] = useState<boolean>(false);
    const [buttonStartStyle, setButtonStartStyle] = useState<ButtonStyle>();
    const [buttonEndStyle, setButtonEndStyle] = useState<ButtonStyle>();

    const [cardHeight, setCardHeight] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    const [slideHeight, setSlideHeight] = useState<number>(0);
    const [slideWidth, setSlideWidth] = useState<number>(0);

    let totalSlides = totalItems
        ? Math.ceil(totalItems / slideItemsQuantity)
        : Math.ceil(itemsList.length / slideItemsQuantity);

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
    };

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

    }, [slideItemsQuantity]);

    useEffect(() => {
        setSlideHeight(cardHeight * (gridRows || 0));

        let gap = gridGap && gridColumns
            ? ((gridGap * 16) * (gridColumns - 1))
            : 0;

        let documentSize = document.body.offsetWidth;

        documentSize >= 670
            ? setSlideWidth((cardWidth * slideItemsQuantity) + gap)
            : setSlideWidth(cardWidth);

    }, [cardHeight, cardWidth, gridGap, gridColumns]);

    let maxHeight =
        itemsHeight
            ? `${itemsHeight}px`
            : heightAutoAdjust
                ? 'none'
                : slideHeight;
    let maxWidth =
        itemsWidth
            ? `${itemsWidth}px`
            : widthAutoAdjust
                ? 'none'
                : slideWidth;

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
