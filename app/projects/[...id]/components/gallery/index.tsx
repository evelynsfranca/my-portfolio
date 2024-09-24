'use client';

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { ProjectImageModel } from "@/models/ProjectModel";

export type ProjectGalleryProps = {
    images: ProjectImageModel[];
    imageIndex: number | null;
    setImageIndex: (v: number | null) => void;
    showImages: boolean;
    setShowImages: (v: boolean) => void;
};

export default function ProjectGallery(props: ProjectGalleryProps) {

    const { images, imageIndex, setImageIndex, showImages, setShowImages } = props;

    const miniatureSize = 116;

    const [galleryContent, setGalleryContent] = useState<string>();
    const [galleryScroll, setGalleryScroll] = useState<number>(0);
    const [galleryEnd, setGalleryEnd] = useState<boolean>(false);
    const [galleryStart, setGalleryStart] = useState<boolean>(false);
    const [galleryWidth, setGalleryWidth] = useState<number>(0);
    const [galleryElement, setGalleryElement] = useState<Element | null>(null);

    const itemsSize = images.length * miniatureSize

    const handleGalleryScroll = (value?: number) => {

        let scroll;
        let defaultScroll;
        let currentScroll;

        if (galleryElement) {
            if (!value && typeof value != "number") { // Quando é atualizado de forma automática
                currentScroll = imageIndex ? imageIndex * miniatureSize : 0;
                defaultScroll = (galleryWidth / 2) - (miniatureSize / 2);
                scroll = currentScroll - defaultScroll;

                scroll = scroll >= 0 ? scroll : 0;

                galleryElement.scroll({ left: scroll, top: 0, behavior: 'smooth' });
            } else { // Quando é atualizado de forma manual
                currentScroll = galleryElement.scrollLeft;
                scroll = value == 0
                    ? currentScroll - galleryWidth
                    : galleryWidth + currentScroll;

                scroll = scroll >= 0 ? scroll : 0;

                galleryElement.scroll({ left: scroll, top: 0, behavior: 'smooth' });
            }
            scroll && setGalleryScroll(scroll)
        }

    }

    const handleOpenImage = (index: number) => {
        setShowImages(true);
        setImageIndex(index);
        handleGalleryScroll();
    }

    const handleGalleryButtons = () => {
        galleryScroll <= 0
        || (imageIndex != null && imageIndex == 0) 
            ? setGalleryStart(true) 
            : setGalleryStart(false); // Se for começo da galeria
            
        galleryScroll >= (itemsSize - galleryWidth)
        || (imageIndex != null && imageIndex == images.length - 1)
            ? setGalleryEnd(true)
            : setGalleryEnd(false); // Se for o fim da galeria
    }

    useEffect(() => { // Atualiza a visualização dos botões de scroll da galeria
        handleGalleryButtons()
    }, [galleryScroll, galleryWidth, imageIndex])

    useEffect(() => { // Atualizar scroll de galeria de forma automática
        handleGalleryScroll()
    }, [imageIndex, showImages]);

    useEffect(() => {

        let element = document.getElementsByClassName(styles.galleryScroll).length
            ? document.getElementsByClassName(styles.galleryScroll)[0]
            : null;
        let gWidth = Number(element?.getBoundingClientRect().width)

        setGalleryElement(element);
        setGalleryWidth(gWidth);

        if (itemsSize < gWidth) setGalleryContent('center')
        else setGalleryContent('flex-start')

    }, [])

    return (
        <article className={styles.gallery}>

            <button
                type="button"
                className={styles.galleryButton}
                style={{ opacity: galleryStart ? 0 : 1 }}
                onClick={() => handleGalleryScroll(0)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div
                className={styles.galleryScroll}
                style={{ justifyContent: galleryContent }}
                onScroll={e => setGalleryScroll(e.currentTarget.scrollLeft)}
            >

                <div className={styles.galleryMiniatures}>
                    {images.map((it, i) => (
                        <div
                            key={it.alt}
                            className={`${styles.galleryMiniature} ${imageIndex == i && styles.active}`}
                            style={{
                                backgroundImage: `url(${it.url})`
                            }}
                            onClick={() => handleOpenImage(i)}
                        >{it.alt}</div>
                    ))}
                </div>

            </div>

            <button
                type="button"
                className={styles.galleryButton}
                style={{ opacity: galleryEnd ? 0 : 1 }}
                onClick={() => handleGalleryScroll(1)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </article>
    );
}
