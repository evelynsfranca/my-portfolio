import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Desenvolvimento de Sites",
  description: "Conheça os serviços prestados relacionados à desenvolvimento de sites, aplicativos, landing pages, integrações e outros serviços relacionados. Solicite um orçamento.",
  keywords: ["Evelyn França", "Serviços","Desenvolvimento de Sites", "Criação de Aplicativos", "Landing Pages", "SEO", "Integrações Personalizadas", "Serviços Web",]
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

