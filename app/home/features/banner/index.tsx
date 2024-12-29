'use client';

import Slider from "@/components/Slider";
import { slides } from "@/data/home/slides";
import BannerCard from "./components/Banner";
import styles from "./index.module.css";

export default function BannerSection() {
    return (
        <section className={styles.section}>
            <div className={styles.banner}>
                <Slider
                    itemsList={slides}
                    totalItems={slides.length}
                    slideItemsQuantity={1}
                    gridRows={1}
                    gridColumns={slides.length}
                    gridFlow="column"
                    gridGap={0}
                    fullScreen={true}
                    cardClass="projectCard"

                >
                    {slides.map((it, i) => (
                        <BannerCard
                            key={it.title}
                            className="bannerCard"
                            index={i}
                            {...it}
                        />
                    ))}
                </Slider>
            </div>
        </section>
    );
}
