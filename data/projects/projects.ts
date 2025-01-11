import { ProjectModel } from "@/models/ProjectModel";

export const projects: ProjectModel[] = [
  {
    id: "dgusto-la-pizza",
    name: "D'Gusto La Pizza",
    shortDescription: "Site de uma pizzaria para que clientes realizem pedidos e usuários realizem a gestão desses pedidos.",
    versions: [
      {
        tag: "1.6.0",
        repositories: [
          {
            name: "GitHub",
            ref: "App",
            link: "https://github.com/evelynsfranca/Dgusto_La_Pizza/tree/main/front"
          },
          {
            name: "GitHub",
            ref: "API",
            link: "https://github.com/evelynsfranca/Dgusto_La_Pizza"
          }
        ],
        links: {
          app: "https://dgusto-la-pizza.vercel.app/",
          api: ""
        },
        description: "/descriptions/dgusto-la-pizza/1.6.0/description.html",
        images: [
          {
            alt: "Home",
            url: "/images/v1/projects/dgusto-la-pizza/01.png"
          },
          {
            alt: "Contato",
            url: "/images/v1/projects/dgusto-la-pizza/02.png"
          },
          {
            alt: "Contato",
            url: "/images/v1/projects/dgusto-la-pizza/03.png"
          }
        ],
        type: "Web",
        technologies: ["Spring", "NextJS", "MySQL"],
        createdAt: "07/11/2021",
        updatedAt: "16/11/2021"
      }
    ],
    flag: "Faculdade"
  }
];