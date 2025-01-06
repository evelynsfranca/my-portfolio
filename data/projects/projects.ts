import { ProjectModel } from "@/models/ProjectModel";

export const projects: ProjectModel[] = [
  {
    id: "dgusto-la-pizza",
    name: "D'Gusto La Pizza",
    shortDescription: "Site de uma pizzaria para que clientes realizem pedidos e usuários realizem a gestão desses pedidos.",
    description: "/descriptions/dgusto.html",
    versions: [
      {
        tag: "1.6.0",
        repository: {
          name: "GitHub",
          link: "https://github.com/evelynsfranca"
        },
        links: {
          app: "https://dgusto-la-pizza.vercel.app/",
          api: ""
        },
        technologies: [ "Spring", "NextJS", "MySQL" ],
        createdAt: "07/11/2021",
        updatedAt: "16/11/2021"
      }
    ],
    flag: "Faculdade",
    type: "Web",
    images: [
      {
        alt: "Home",
        url: "/images/projects/dgusto-la-pizza/01.png"
      },
      {
        alt: "Contato",
        url: "/images/projects/dgusto-la-pizza/02.png"
      },
      {
        alt: "Contato",
        url: "/images/projects/dgusto-la-pizza/03.png"
      }
    ]
  }
];