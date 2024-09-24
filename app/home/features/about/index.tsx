import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import aboutImage from '@/public/images/slides/02.jpg';

export default function AboutSection() {
    return (
        <section id="about" className={styles.section}>            

            <article className={styles.article}>
                <Image src={aboutImage} alt="about-image" />
            </article>

            <article className={styles.article}>

                <header className={styles.header}>
                    <h2>Sobre mim</h2>
                </header>

                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aut reiciendis amet cupiditate eum ipsa doloribus, sequi, quasi laboriosam soluta facilis natus voluptatem hic quo numquam blanditiis iure eius reprehenderit.</p>
                </div>

                <Link href="/about" className={styles.button}>Saiba mais</Link>
                
            </article>

        </section>
    );
}
