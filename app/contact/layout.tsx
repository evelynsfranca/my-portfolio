import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contato | Desenvolvimento de Sites",
  description: "Solicite seu orçamento agora! Entre em contato para discutir projetos de desenvolvimento web, criação de aplicativos ou otimização de SEO. Retorno rapidamente!",
  keywords: ["Evelyn França", "Contato", "Solicitar Orçamento", "Redes Sociais", "Desenvolvimento de Sites", "Criação de Aplicativos", "Landing Pages", "SEO", "Integrações Personalizadas", "Serviços Web"]
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <Suspense>{children}</Suspense>
}

