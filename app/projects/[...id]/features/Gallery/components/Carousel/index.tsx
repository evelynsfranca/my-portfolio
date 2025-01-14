'use client';

import { ProjectImageModel } from "@/models/ProjectModel";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import styles from "./index.module.css";

export type ProjectCarouselProps = {
    images: ProjectImageModel[]
    imageIndex: number | null;
    setImageIndex: (v: number | null) => void;
    showImages: boolean;
    setShowImages: (v: boolean) => void;
};

export default function ProjectCarousel(props: ProjectCarouselProps) {

    const { images, imageIndex, setImageIndex, showImages, setShowImages } = props;

    const handleImage = (index: number) => {

        if (imageIndex != null && index != undefined) {
            let newImageIndex = index === 0 ? imageIndex - 1 : imageIndex + 1;

            if (newImageIndex === -1) // Quando está tentando voltar da primeira imagem
                setImageIndex(images.length - 1);
            else if (newImageIndex < images.length)  // Quando está tentando avançar ou voltar de qualquer outra imagem no meio
                setImageIndex(newImageIndex);
            else // Quando está tentando avançar da última imagem
                setImageIndex(0);
        }
    };

    const handleScroll = () => {
        const currentElement = document.getElementsByClassName(styles.scroll)[0];
        let galleryWidth = Number(currentElement?.getBoundingClientRect().width);

        let scroll;
        let defaultScroll;
        let currentScroll;

        if (showImages) {
            currentScroll = (imageIndex ? (imageIndex + 1) : 0) * galleryWidth;
            defaultScroll = galleryWidth;
            scroll = currentScroll - defaultScroll;
            currentElement.scroll({ left: scroll || 0, top: 0, behavior: 'smooth' });
        }
    };

    const handleClose = () => {
        setShowImages(!showImages);
        setImageIndex(null);
    };

    useEffect(() => { // Atualizar scroll do carrossel quando selecionada outra imagem
        handleScroll();
    }, [imageIndex]);

    useEffect(() => { // Atualizar scroll do carrossel de forma automática (7 segundos)
        if (showImages && imageIndex != null) {
            const timeoutId = setTimeout(() => handleImage(1), 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [imageIndex]);

    return (
        <>
            {showImages && (
                <article className={styles.block}>

                    <button
                        className={styles.closeButton}
                        type="button"
                        onClick={handleClose}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    <article className={styles.carousel}>

                        <button
                            className={styles.button}
                            type="button"
                            onClick={() => handleImage(0)}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <div className={styles.scroll}>

                            <div className={styles.images}>

                                {images.map((it, i) => (
                                    <div
                                        key={it.url}
                                        className={`${styles.image} ${imageIndex == i && styles.imageActive}`}
                                        style={{
                                            backgroundImage: `url(${it.url})`
                                        }}
                                    >
                                        <span>{it.alt.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={styles.button}
                            type="button"
                            onClick={() => handleImage(1)}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>

                    </article>
                </article>
            )}
        </>
    );
}
