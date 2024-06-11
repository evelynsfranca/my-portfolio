import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";

export interface SlideProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export default function BannerSection() {

    const slides: SlideProps[] = [
        {
            title: "Desenvolvimento de Software 1",
            subtitle: "Desenvolvimento de websites e aplicativos",
            backgroundImage: "01-city.jpg",
        },
        {
            title: "Desenvolvimento de Software 2",
            subtitle: "Desenvolvimento de websites e aplicativos",
            backgroundImage: "02-office.jpg",
        },
        {
            title: "Desenvolvimento de Software 3",
            subtitle: "Desenvolvimento de websites e aplicativos",
            backgroundImage: "03-computer.jpg",
        }
    ];

    const [slideIndex, setSlideIndex] = useState<number>(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        const active = index === slideIndex && styles.bannerContentActive;
        return styles.bannerContent + " " + active;
    }

    const handleBannerButtonsStyle = (index: number) => {
        const active = index === slideIndex && styles.bannerButtonActive;
        return styles.bannerButton + " " + active;
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => handleSlide(slideIndex + 1), 7000);    
        return () => clearTimeout(timeoutId);
      }, [handleSlide, slideIndex]); // Empty dependency array ensures the effect runs only once
    

    return (
        <section className={styles.section}>            
            <div>

                <button
                    className={styles.slideButton}
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
                            <h1 className={styles.title}>{it.title}</h1>
                            <h2 className={styles.subTitle}>{it.subtitle}</h2>
                        </div>
                    ))}
                </div>

                <div className={styles.bannerButtons}>
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

                <button
                    className={styles.slideButton}
                    type="button"
                    onClick={() => handleSlide(slideIndex + 1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
        </section>
    );
}
