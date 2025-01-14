'use client';

import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

interface SliderProps {
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
    fullScreen?: boolean;
    children: React.ReactNode;
}

export default function Slider(props: SliderProps) {

    const { itemsList, cardClass, totalItems, itemsHeight, itemsWidth, slideItemsQuantity, gridRows, gridColumns, gridFlow, gridGap, widthAutoAdjust, heightAutoAdjust, fullScreen, children } = props;

    const slideRef = useRef<HTMLElement>(null);

    const [slideIndex, setSlideIndex] = useState<number>(0);
    const [slideStart, setSlideStart] = useState<boolean>(true);
    const [slideEnd, setSlideEnd] = useState<boolean>(false);
    const [buttonStartStyle, setButtonStartStyle] = useState<CSSProperties>();
    const [buttonEndStyle, setButtonEndStyle] = useState<CSSProperties>();

    const [cardHeight, setCardHeight] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    const [slideHeight, setSlideHeight] = useState<number>(0);
    const [slideWidth, setSlideWidth] = useState<number>(0);

    let totalSlides = totalItems
        ? Math.ceil(totalItems / slideItemsQuantity)
        : Math.ceil(itemsList.length / slideItemsQuantity);

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
            scrollSize =
                fullScreen
                    ? document.body.offsetWidth
                    : slideRef.current.getBoundingClientRect().width + gapWidth;
            scroll = slideIndex
                ? slideIndex * scrollSize
                : 0;

            slideRef.current.scroll({ left: scroll, behavior: 'smooth' });
        }
    }, [slideIndex, gridGap, gridColumns, fullScreen, slideRef]);

    const handleSlideButtons = (condition: boolean, value: number) =>
        condition || fullScreen ? handleSlide(value) : false;

    const handleBannerButtonsStyle = (index: number) => {
        const active = index === slideIndex && styles.active;
        return styles.roundButton + " " + active;
    }

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

        if (fullScreen) {
            setButtonStartStyle({
                opacity: 1,
                cursor: 'pointer',
                position: 'absolute',
                left: 0,
                zIndex: 5
            });

            setButtonEndStyle({
                opacity: 1,
                cursor: 'pointer',
                position: 'absolute',
                right: 0,
                zIndex: 5
            });
        } else {
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
        }

    }, [slideStart, slideEnd, fullScreen]);

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
        setSlideHeight(cardHeight * (gridRows || 0));

        let gap = gridGap && gridColumns
            ? ((gridGap * 16) * (gridColumns - 1))
            : 0;

        let documentSize = document.body.offsetWidth;

        documentSize >= 670
            ? setSlideWidth((cardWidth * slideItemsQuantity) + gap)
            : setSlideWidth(cardWidth);

    }, [cardHeight, cardWidth, gridGap, gridColumns, gridRows, slideItemsQuantity]);

    useEffect(() => {

        if (fullScreen) {
            const timeoutId = setTimeout(() => handleSlide(slideIndex + 1), 7000);
            return () => clearTimeout(timeoutId);
        }

    }, [fullScreen, handleSlide, slideIndex]);


    let maxHeight =
        itemsHeight
            ? `${itemsHeight}px`
            : heightAutoAdjust
                ? 'none'
                : fullScreen ? '100%' : slideHeight;
    let maxWidth =
        itemsWidth
            ? `${itemsWidth}px`
            : widthAutoAdjust
                ? 'none'
                : fullScreen ? '100%' : slideWidth;

    let templateRows = `repeat(${gridRows}, 1fr)` || 'none';
    let templateColumns = 
        totalItems && gridColumns && totalItems < gridColumns 
            ? `repeat(${totalItems}, 1fr)` 
            : `repeat(${gridColumns}, 1fr)`;
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
                    gap: gap,
                    width: fullScreen ? '100vw' : 'auto'
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

            {fullScreen && (
                <div className={styles.buttons}>
                    {itemsList.map((it, i) => (
                        <button
                            key={i}
                            className={handleBannerButtonsStyle(i)}
                            onClick={() => handleSlide(i)}
                        >
                            <div className={styles.circle} />
                        </button>
                    ))}
                </div>
            )}

        </section>
    );
}
