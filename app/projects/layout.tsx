import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos | Desenvolvimento de Sites",
  description: "Conheça os projetos que desenvolvi ao longo da minha trajetória como desenvolvedora de software, como: sites, aplicativos, landing pages, integrações, entre outros. Solicite um orçamento.",
  keywords: ["Desenvolvimento de Sites", "Criação de Aplicativos", "Landing Pages", "SEO", "Integrações Personalizadas", "Serviços Web", "Evelyn França", "Projetos"]
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

