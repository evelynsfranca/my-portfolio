import ServicesSection from "./features/services";
import BannerSection from "./features/banner";
import ProjectsSection from "./features/projects";
import styles from "./page.module.css";
import AboutSection from "./features/about";
import ContactSection from "./features/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      Home
      <BannerSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
