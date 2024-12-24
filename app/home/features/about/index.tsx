import styles from "./index.module.css";
import Image from "next/image";
import aboutImage from '@/public/images/about/cover.webp';
import ButtonLink from "@/components/Button/Link";

export default function AboutSection() {
    return (
        <section id="about" className={styles.section}>

            <article className={styles.article}>
                <Image
                    src={aboutImage}
                    alt="about-image"
                />
            </article>

            <article className={styles.article}>

                <header className={styles.header}>
                    <h2>Sobre mim</h2>
                </header>

                <div className={styles.content}>
                    <p>
                        Formada em Análise e desenvolvimento de Sistemas pela PUC-PR, tenho atuado na área de Desenvolvimento de Software, onde venho aperfeiçoando e exercendo minhas habilidades, visando a entrega de produtos de qualidade, com performance e desempenho para meus clientes.   
                    </p>
                </div>

                <footer className={styles.footer}>
                    <ButtonLink
                        label="Saiba mais"
                        url="/about"
                        color="primary"
                        type="button"
                        target="_self"
                    />
                </footer>

            </article>
            
        </section>
    );
}
