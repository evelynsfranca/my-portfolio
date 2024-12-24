'use client';

import ButtonLink from "@/components/Button/Link";
import CardSlider from "@/components/CardSlider";
import { services } from "@/data/services/services";
import { useEffect, useState } from "react";
import ServiceCard from "./components/card";
import styles from "./index.module.css";

export default function ServicesSection() {

    const [slideItems, setSlideItems] = useState<number>(0);
    const [cardHeight, setCardHeight] = useState<number>(0);
    const [cardWidth, setCardWidth] = useState<number>(0);
    const [documentSize, setDocumentSize] = useState<number>(0);
    const [itemsHeight, setItemsHeight] = useState<number>(0);
    const [itemsWidth, setItemsWidth] = useState<number>(0);


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

                <CardSlider 
                    itemsList={services} 
                    slideItemsQuantity={slideItems}
                    itemsHeight={itemsHeight}
                    itemsWidth={itemsWidth}
                    gridRows={'1fr 1fr'}
                    gridColumns={'1fr 1fr'}
                    gridFlow="column"
                >
                    <>
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
                    </>
                </CardSlider>

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
