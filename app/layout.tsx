import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
     default: "Evelyn França | Portfólio | Desenvolvimento de sites", template: "Evelyn França | %s"
  },
  description: "Solicite seu orçamento agora! Entre em contato para discutir projetos de desenvolvimento web, criação de aplicativos, landing pages, integrações e otimização de SEO. Retorno rapidamente!",
  keywords: ["Evelyn França", "Portfólio", "Redes Sociais", "Desenvolvimento de Sites", "Criação de Aplicativos", "Landing Pages", "SEO", "Integrações Personalizadas", "Serviços Web", "Orçamento"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">      
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.x.x/css/all.min.css" />

      <GoogleAnalytics gaId={"G-1ZN4MFRD46"} />

      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
