import { ServiceModel } from "@/models/ServiceModel";
import { faChartSimple, faComputer, faDesktop, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const services: ServiceModel[] = [
    {
        id: "desenvolvimento-de-sites",
        title: "Desenvolvimento de sites",
        shortDescription: "Ofereço serviços de desenvolvimento de sites personalizados e responsivos, criados para atender às necessidades específicas de cada cliente. Com foco em design intuitivo e performance, os sites são otimizados para proporcionar uma experiência de navegação fluida em qualquer dispositivo. Utilizando as tecnologias mais recentes, desenvolvo sites que combinam funcionalidade e estética, ajudando a destacar a presença online do seu negócio.",
        icon: faComputer,
        image: "/images/services/01.webp",
        description: `Desenvolvimento de sites personalizados e responsivos, criados para atender às necessidades específicas de cada cliente. Com foco em design intuitivo e performance, os sites são otimizados para proporcionar uma experiência de navegação fluida em qualquer dispositivo. Utilizando as tecnologias mais recentes, desenvolvo sites que combinam funcionalidade e estética, ajudando a destacar a presença online do seu negócio.
      `
    },
    {
        id: "desenvolvimento-de-aplicativos",
        title: "Desenvolvimento de Aplicativos",
        shortDescription: "Desenvolvimento de aplicativos híbridos para Android e iOS, com uma abordagem que une eficiência e custo-benefício. Com uma única base de código, consigo desenvolver apps que funcionam perfeitamente em ambas as plataformas, reduzindo o tempo de lançamento no mercado. Cada aplicativo é projetado com foco em usabilidade e desempenho, garantindo uma experiência de usuário excelente e compatível com os padrões de ambas as lojas de aplicativos.",
        description:
            `Desenvolvimento de aplicativos híbridos para Android e iOS, com uma abordagem que une eficiência e custo-benefício. Com uma única base de código, consigo desenvolver apps que funcionam perfeitamente em ambas as plataformas, reduzindo o tempo de lançamento no mercado. Cada aplicativo é projetado com foco em usabilidade e desempenho, garantindo uma experiência de usuário excelente e compatível com os padrões de ambas as lojas de aplicativos.
        `,
        icon: faDesktop,
        image: "/images/services/02.webp"
    },
    {
        id: "implementacao-de-seo",
        title: "Implementação e otimização de SEO",
        shortDescription: "Realizo configurações e otimizações de SEO para melhorar o posicionamento do seu site nos motores de busca. Meu trabalho inclui análise de palavras-chave, otimização de conteúdo, melhorias na velocidade de carregamento e implementação de técnicas avançadas para melhorar a visibilidade do site. Com uma abordagem focada em resultados, ajudo a aumentar a relevância e a atração orgânica para seu site, garantindo que seu público-alvo o encontre com facilidade.",
        description:
            `Realizo configurações e otimizações de SEO para melhorar o posicionamento do seu site nos motores de busca. Meu trabalho inclui análise de palavras-chave, otimização de conteúdo, melhorias na velocidade de carregamento e implementação de técnicas avançadas para melhorar a visibilidade do site. Com uma abordagem focada em resultados, ajudo a aumentar a relevância e a atração orgânica para seu site, garantindo que seu público-alvo o encontre com facilidade.
        `,
        icon: faTerminal,
        image: "/images/services/03.webp"
    },
    {
        id: "desenvolvimento-de-landing-pages",
        title: "Desenvolvimento de Landing Pages",
        shortDescription: "Desenvolvimento de landing pages eficazes e visualmente atraentes, projetadas para converter visitantes em clientes. Cada landing page é construída com base em princípios de design e técnicas de SEO, com elementos que conduzem o visitante ao objetivo desejado, seja uma inscrição, venda ou contato. Utilizando práticas modernas de marketing digital, crio páginas com carregamento rápido e compatibilidade total em dispositivos móveis.",
        description:
            `Desenvolvimento de landing pages eficazes e visualmente atraentes, projetadas para converter visitantes em clientes. Cada landing page é construída com base em princípios de design e técnicas de SEO, com elementos que conduzem o visitante ao objetivo desejado, seja uma inscrição, venda ou contato. Utilizando práticas modernas de marketing digital, crio páginas com carregamento rápido e compatibilidade total em dispositivos móveis.
        `,
        icon: faChartSimple,
        image: "/images/services/04.webp"
    }
];