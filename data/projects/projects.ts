import { ProjectModel } from "@/models/ProjectModel";

export const projects: ProjectModel[] = [
  {
    id: "dgusto-la-pizza",
    name: "D'Gusto La Pizza",
    shortDescription: "Site de uma pizzaria para que clientes realizem pedidos e usuários realizem a gestão desses pedidos.",
    resume: "Desenvolvido como projeto final de curso, o site D’gusto La Pizza foi criado para digitalizar e otimizar o gerenciamento de uma pizzaria, permitindo tanto a interação dos clientes com os serviços quanto o gerenciamento completo por parte do administrador.",
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
        description: process.env.BLOB_HOSTNAME + "/projects/details/dgusto-la-pizza/1.6.0/description.html",
        type: "Web",
        technologies: ["Spring Boot", "NextJS", "MySQL"],
        createdAt: "07/11/2021",
        updatedAt: "16/11/2021"
      }
    ],
    flag: "Faculdade"
  },
  {
    id: "to-do-list",
    name: "To-do list",
    shortDescription: "Site para gerenciamento de listas de tarefas."  ,
    resume: "Criado como teste para um processo seletivo, o To-do List foi desenvolvido para permitir a criação e gerenciamento de listas personalizadas. O usuário pode adicionar, editar e excluir itens, oferecendo total controle sobre suas tarefas e atividades.",    
    versions: [
      {
        tag: "1.0",
        repositories: [
          {
            name: "GitHub",
            ref: "App",
            link: "https://github.com/evelynsfranca/evelynsfranca.github.io"
          }
        ],
        links: {
          app: "https://evelynsfranca.github.io/"
        },
        description: process.env.BLOB_HOSTNAME + "/projects/details/to-do-list/1.0/description.html",
        type: "Web",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        createdAt: "24/07/2020",
        updatedAt: "04/08/2020"
      }
    ],
    flag: "Hobby"
  }
];