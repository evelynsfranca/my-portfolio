import { SlideModel } from "@/models/SlideModel";
import { services } from "../services/services";

export const slides: SlideModel[] = [
    {
        title: services[0].title,
        subtitle: "Destaque sua presença online com um site profissional. ",
        backgroundImage: "/images/slides/01.webp",
        link: "/servicos#" + services[0].id
    },
    {
        title: services[1].title,
        subtitle: "Seu aplicativo funcionando em Android e iOS com um só desenvolvimento. Comece agora!",
        backgroundImage: "/images/slides/02.webp",
        link: "/servicos#" + services[1].id
    },
    {
        title: services[2].title,
        subtitle: "Melhore sua visibilidade online com otimizações avançadas de SEO.",
        backgroundImage: "/images/slides/03.webp",
        link: "/servicos#" + services[2].id
    },
    {
        title: services[3].title,
        subtitle: "Converta mais visitantes em clientes com uma landing page estratégica.",
        backgroundImage: "/images/slides/04.webp",
        link: "/servicos#" + services[3].id
    }
];