'use client';

import ButtonLink from "@/components/Button/Link";
import Slider from "@/components/Slider";
import { services } from "@/data/services/services";
import { useEffect, useState } from "react";
import ServiceCard from "./components/card";
import styles from "./index.module.css";

export default function ServicesSection() {

    const [slideItems, setSlideItems] = useState<number>(0);
    const [documentSize, setDocumentSize] = useState<number>();

    useEffect(() => {
        let documentSize = document.body.offsetWidth;

        documentSize >= 670
            ? setSlideItems(4)
            : setSlideItems(2);

        setDocumentSize(documentSize);
    }, []);

    return (
        <section id="services" className={styles.section}>

            <header className={styles.header}>
                <h2>Serviços</h2>
            </header>

            <div className={styles.content}>
                <Slider
                    itemsList={services}
                    slideItemsQuantity={slideItems}
                    gridRows={2}
                    gridColumns={documentSize && documentSize >= 640 ? 2 : 1}
                    gridFlow="column"
                    totalItems={services.length}
                    cardClass="serviceCard"
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
                </Slider>
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
