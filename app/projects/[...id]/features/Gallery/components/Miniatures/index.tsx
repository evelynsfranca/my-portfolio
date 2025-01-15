'use client';

import { ProjectImageModel } from "@/models/ProjectModel";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export type ProjectMiniaturesProps = {
    images: ProjectImageModel[];
    imageIndex: number | null;
    setImageIndex: (v: number | null) => void;
    showImages: boolean;
    setShowImages: (v: boolean) => void;
};

export default function ProjectMiniatures(props: ProjectMiniaturesProps) {

    const { images, imageIndex, setImageIndex, showImages, setShowImages } = props;

    const miniatureSize = 118;

    const element = useRef<HTMLDivElement>(null);

    const [scroll, setScroll] = useState<number>(0);
    const [end, setEnd] = useState<boolean>(false);
    const [start, setStart] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const [showDescription, setShowDescription] = useState<number>();

    const itemsSize = images.length * miniatureSize

    const handleScroll = (value?: number) => {

        let scroll;
        let defaultScroll;
        let currentScroll;

        if (element.current) {
            if (!value && typeof value != "number") { // Quando é atualizado de forma automática
                currentScroll = (imageIndex || 0) * miniatureSize;

                let w =
                    width > 0
                        ? width
                        : document
                            .getElementsByClassName(styles.scroll)[0]
                            .getBoundingClientRect()
                            .width;

                defaultScroll = (w / 2) - (miniatureSize / 2);
                scroll = imageIndex == 0
                    ? 0
                    : currentScroll - defaultScroll;

                scroll = scroll >= 0 ? scroll : 0;

                element.current.scroll({ left: scroll, top: 0, behavior: 'smooth' });
            } else { // Quando é atualizado de forma manual
                currentScroll = element.current.scrollLeft;
                scroll = value == 0
                    ? currentScroll - width
                    : width + currentScroll;

                scroll = scroll >= 0 ? scroll : 0;

                element.current.scroll({ left: scroll, top: 0, behavior: 'smooth' });
            }
            scroll && setScroll(scroll);
        }
    }

    const handleOpen = (index: number) => {
        setShowImages(true);
        setImageIndex(index);
        handleScroll();
    }

    const handleButtons = () => {
        scroll <= 0
            || (imageIndex != null && imageIndex == 0)
            ? setStart(true)
            : setStart(false); // Se for começo da galeria

        scroll >= (itemsSize - width)
            || (imageIndex != null && imageIndex == images.length - 1)
            ? setEnd(true)
            : setEnd(false); // Se for o fim da galeria
    }

    useEffect(() => { // Atualiza a visualização dos botões de scroll da galeria
        handleButtons();
    }, [scroll, width, imageIndex]);

    useEffect(() => { // Atualizar scroll de galeria de forma automática
        handleScroll();
    }, [imageIndex, showImages, width]);

    useEffect(() => {

        let gWidth = Number(element?.current?.offsetWidth);

        setWidth(gWidth);
    }, [images, element]);

    return (
        <article className={styles.gallery}>

            {showImages && (
                <button
                    type="button"
                    className={styles.button}
                    style={{ opacity: start ? 0 : 1 }}
                    onClick={() => handleScroll(0)}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            )}

            <div
                ref={element}
                className={styles.scroll}
                onScroll={e => setScroll(e.currentTarget.scrollLeft)}
            >
                <div className={styles.miniatures}>

                    {images.map((it, i) => (
                        <figure
                            key={i}
                            className={`${styles.miniature} ${imageIndex == i && styles.active}`}
                            onClick={() => handleOpen(i)}
                            onMouseOver={() => setShowDescription(i)}
                            onMouseLeave={() => setShowDescription(undefined)}
                        >
                            <Image
                                className={styles.image}
                                src={it.url}
                                alt={it.alt}
                                height={0}
                                width={0}
                                sizes="100vw"
                            />

                            <figcaption
                                className={styles.description}
                                style={{
                                    opacity: (showDescription == i || imageIndex == i) ? .85 : 0
                                }}
                            >
                                <span>{it.alt}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>

            {showImages && (
                <button
                    type="button"
                    className={styles.button}
                    style={{ opacity: end ? 0 : 1 }}
                    onClick={() => handleScroll(1)}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            )}
        </article>
    );
}
