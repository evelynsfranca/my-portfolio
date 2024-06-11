'use client';
import ServicesSection from "./features/services";
import BannerSection from "./features/banner";
import ProjectsSection from "./features/projects";
import styles from "./page.module.css";
import AboutSection from "./features/about";
import ContactSection from "./features/contact";

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
