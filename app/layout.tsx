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

const AUTHOR = "Evelyn França";
const TITLE = "Evelyn França | Desenvolvimento de sites | Portfólio";
const DESCRIPTION = "Especializada em desenvolvimento de sites, aplicativos e otimização de SEO. Confira meu portfólio e entre em contato para projetos personalizados.";
const KEYWORDS = ["Desenvolvimento de Sites", "Evelyn França", "Redes Sociais", "Criação de Aplicativos", "Landing Pages", "SEO", "Integrações Personalizadas", "Serviços Web", "Orçamento", "Portfólio"];
const URL = "https://evelynfranca.com/"

export const metadata: Metadata = {
  applicationName: "My Portfolio",
  creator: AUTHOR,
  authors: {
    name: AUTHOR,
    url: URL
  },
  category: "Tecnologia",
  alternates: {
    canonical: URL
  },
  title: {
    default: TITLE, 
    template: "Evelyn França | %s"
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL
  },
  twitter: {
    title: "Evelyn França - Desenvolvedora de Software",
    description: DESCRIPTION
  },
  icons: {
    icon: [
      {
        url: "/images/icon.ico",
        href: "/images/icon.ico",
        sizes: "any",
        rel: "icon"
      },
      {
        url: "/images/icon.ico",
        href: "/images/icon.ico",
        rel: "shortcut icon"
      },
      {
        url: "/images/icon-32x32.png",
        href: "/images/icon-32x32.png",
        sizes: "32x32",
        rel: "icon"
      },
      {
        url: "/images/icon-24x24.png",
        href: "/images/icon-24x24.png",
        sizes: "24x24",
        rel: "icon"
      },
      {
        url: "/images/icon-20x20.png",
        href: "/images/icon-20x20.png",
        sizes: "20x20",
        rel: "icon"
      },
      {
        url: "/images/icon-18x18.png",
        href: "/images/icon-18x18.png",
        sizes: "18x18",
        rel: "icon"
      },
      {
        url: "/images/icon-16x16.png",
        href: "/images/icon-16x16.png",
        sizes: "16x16",
        rel: "icon"
      },
      {
        url: "/images/apple-touch-icon.png",
        href: "/images/apple-touch-icon.png",
        sizes: "180x180",
        rel: "apple-touch-icon"
      }
    ]
  }
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
