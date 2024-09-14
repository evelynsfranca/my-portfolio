'use client';

import { useEffect } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectImageModel } from "@/models/ProjectModel";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

export type ProjectCarouselProps = {
    images: ProjectImageModel[]
    imageIndex: number | null;
    setImageIndex: (v: number | null) => void;
    showImages: boolean;
    setShowImages: (v: boolean) => void;
};

export default function ProjectCarousel(props: ProjectCarouselProps) {

    const { images, imageIndex, setImageIndex, showImages, setShowImages } = props;

    const handleCarouselImage = (index?: number) => {

        if (imageIndex != null && index != undefined) {
            let newImageIndex = index === 0 ? imageIndex - 1 : imageIndex + 1;

            if (newImageIndex === -1) // Quando está tentando voltar da primeira imagem
                setImageIndex(images.length - 1);
            else if (newImageIndex < images.length)  // Quando está tentando avançar ou voltar de qualquer outra imagem no meio
                setImageIndex(newImageIndex);
            else // Quando está tentando avançar da última imagem
                setImageIndex(0);
        }

        handleCarouselScroll(index);
    };

    const handleCarouselScroll = (index?: number) => {
        const currentElement = document.getElementsByClassName(styles.carouselScroll)[0];
        let galleryWidth = Number(currentElement?.getBoundingClientRect().width);

        let scroll;
        let defaultScroll;
        let currentScroll;

        if (showImages) {

            if (index != undefined) { // Quando é movimentado pelos botões
                currentScroll = currentElement.scrollLeft;
                scroll = index == 0
                    ? currentScroll - galleryWidth
                    : galleryWidth + currentScroll;

                currentElement.scroll({ left: scroll, top: 0, behavior: 'smooth' });

            } else if (imageIndex != null) { // Quando é movimentado de forma automática
                currentScroll = (imageIndex + 1) * galleryWidth;
                defaultScroll = galleryWidth;
                scroll = currentScroll - defaultScroll;
                currentElement.scroll({ left: scroll || 0, top: 0, behavior: 'smooth' });
            }
        }
    };

    const handleCarouselClose = () => {
        setShowImages(!showImages);
        setImageIndex(null);
    };

    useEffect(() => { // Atualizar scroll do carrossel quando selecionada outra imagem
        handleCarouselImage();
    }, [imageIndex]);

    useEffect(() => { // Atualizar scroll do carrossel de forma automática (7 segundos)
        if (showImages && imageIndex != null) {
            const timeoutId = setTimeout(() => handleCarouselImage(1), 7000);
            return () => clearTimeout(timeoutId);
        }
    }, [imageIndex]);

    return (
        <>
            {showImages && (
                <div className={styles.carouselBlock}>

                    <button
                        className={styles.carouselCloseButton}
                        type="button"
                        onClick={handleCarouselClose}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>

                    <article className={styles.carousel}>
                        <button
                            className={styles.carouselButton}
                            type="button"
                            onClick={() => handleCarouselImage(0)}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <div className={styles.carouselScroll}>

                            <div className={styles.carouselImages}>
                                {images.map((it, i) => (
                                    <div
                                        key={it.alt}
                                        className={`${styles.carouselImage} ${imageIndex == i && styles.carouselImageActive}`}
                                        style={{
                                            backgroundImage: `url(${it.url})`
                                        }}
                                    >{it.alt}</div>
                                ))}
                            </div>
                        </div>

                        <button
                            className={styles.carouselButton}
                            type="button"
                            onClick={() => handleCarouselImage(1)}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </article>
                </div>
            )}
        </>
    );
}
