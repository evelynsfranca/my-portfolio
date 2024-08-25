import ServicesSection from "./home/features/services";
import BannerSection from "./home/features/banner";
import ProjectsSection from "./home/features/projects";
import styles from "./page.module.css";
import AboutSection from "./home/features/about";
import ContactSection from "./home/features/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evelyn França | Portfólio"
};

export default function Home() {
  
  return (
    <main id="home" className={styles.main}>
      <BannerSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
