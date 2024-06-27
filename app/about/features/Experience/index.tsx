import styles from "./index.module.css";
import Image from "next/image";
import firstImage from '@/public/profile.jpeg';
import secondImage from '@/public/graduate.jpg';

export default function AboutExperience() {
  return (
    <article id="experience" className={styles.content}>
      <header>
        <h2>Trajetória profissional</h2>
      </header>

      <div className={styles.contentLine}>
        <div className={styles.image}>
          <Image src={firstImage} alt="" />
        </div>
        <div className={styles.text}>
          <h3>2024</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque alias sed nemo et architecto, fugit ducimus esse exercitationem ipsa pariatur? In velit doloribus illo dolorum impedit doloremque iusto nisi.
          </p>
        </div>
      </div>

      <div className={styles.contentLine}>
        <div className={styles.text}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus doloremque alias sed nemo et architecto, fugit ducimus esse exercitationem ipsa pariatur? In velit doloribus illo dolorum impedit doloremque iusto nisi.
          </p>
          <h3>2023</h3>
        </div>
        <div className={styles.image}>
          <Image src={secondImage} alt="" />
        </div>
      </div>
    </article>
  );
}
