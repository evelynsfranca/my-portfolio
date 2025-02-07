'use client';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from "./index.module.css";

export interface ButtonLinkProps {
    label: string;
    url: string;
    color: 'primary' | 'secondary';
    icon?: IconProp | 'none' | 'default';
    type: 'button' | 'link';
    target?: string;
    iconSide?: "left" | "right";
}

export default function ButtonLink(props: ButtonLinkProps) {

    const { label, url, color, icon, type, target, iconSide } = props;

    const [linkColor, setLinkColor] = useState<string>('var(--' + color + '-color-text)');
    const [linkBackgroundColor, setLinkBackgroundColor] = useState<string>('transparent');
    const [buttonActive, setButtonActive] = useState<boolean>(false);

    const buttonColor =
        type == 'link'
            ? 'var(--' + color + '-color-text)'
            : 'var(--text-primary-color)';
    const buttonBackgroundColor =
        type == 'link'
            ? 'none'
            : color === 'primary'
                ? 'var(--' + color + '-color-variant)'
                : 'var(--' + color + '-color-variant)';

    const buttonColorHover =
        type == 'link'
            ? 'var(--' + color + '-color-text-hover)'
            : 'var(--text-primary-color)';
    const buttonBackgroundColorHover =
        type == 'link'
            ? 'none'
            : 'var(--' + color + '-color-hover)';

    const buttonIcon = icon === 'default'
        ? faArrowUpRightFromSquare
        : icon != 'none'
            ? icon
            : null;

    const handleButtonColor = useCallback(() => {
        if (buttonActive) {
            setLinkColor(buttonColorHover);
            setLinkBackgroundColor(buttonBackgroundColorHover);
        } else {
            setLinkColor(buttonColor);
            setLinkBackgroundColor(buttonBackgroundColor);
        }
    }, [buttonActive, buttonColor, buttonColorHover, buttonBackgroundColor, buttonBackgroundColorHover]);
    
    useEffect(() => handleButtonColor(), [buttonActive, handleButtonColor]);


    return (
        <Link
            id={url}
            href={url}
            className={`${type == 'link' ? styles.linkButton : styles.button} ${iconSide == "left" && styles.left }`}
            style={{
                color: linkColor,
                background: linkBackgroundColor,
                flexDirection: iconSide == 'left' ? 'row-reverse' : 'row'
            }}
            onMouseEnter={() => setButtonActive(true)}
            onMouseLeave={() => setButtonActive(false)}
            target={target || "_blank"}
        >
            {label}
            {buttonIcon && (<FontAwesomeIcon icon={buttonIcon} />)}
        </Link>
    );
}
