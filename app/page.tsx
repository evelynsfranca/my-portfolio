"use client";

import { useEffect } from "react";
import AboutSection from "./home/features/about";
import BannerSection from "./home/features/banner";
import ContactSection from "./home/features/contact";
import ProjectsSection from "./home/features/projects";
import ServicesSection from "./home/features/services";
import styles from "./page.module.css";

export default function Home() {
  
  useEffect(() => { document.body.scrollTo({ top: 0, behavior: 'smooth' })}, []);

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
