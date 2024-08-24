import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços"
};


export default function Services() {
  return (
    <main className={styles.main}>Services</main>
  );
}
