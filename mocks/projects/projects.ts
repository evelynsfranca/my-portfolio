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
            link: "https://github.com/evelynsfranca/Dgusto_La_Pizza/tree/main/back"
          }
        ],
        links: {
          app: "https://dgusto-la-pizza-coral.vercel.app/",
          api: ""
        },
        description: process.env.BLOB_HOSTNAME + "/projects/details/dgusto-la-pizza/1.6.0/description.html",
        type: "Web",
        technologies: [
          {
            name: "Spring Boot",
            version: "2.5.4"
          },
          {
            name: "Java",
            version: "11"
          },
          {
            name: "MySQL",
            version: "8.0.26"
          },
          {
            name: "Maven",
            version: "4.0.0"
          },
          {
            name: "NextJS",
            version: "11.0.0"
          },
          {
            name: "ReactJS",
            version: "17.0.2"
          },
          {
            name: "TypeScript",
            version: "^4.4.4"
          },
          {
            name: "Sass",
            version: "^1.43.4"
          }
        ],
        createdAt: "07/11/2021",
        updatedAt: "16/11/2021"
      }
    ],
    flag: "Faculdade"
  },
  {
    id: "to-do-list",
    name: "To-do list",
    shortDescription: "Site para gerenciamento de listas de tarefas.",
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
        technologies: [
          {
            name: "HTML5"
          },
          {
            name: "CSS3"
          },
          {
            name: "JavaScript"
          }
        ],
        createdAt: "24/07/2020",
        updatedAt: "04/08/2020"
      }
    ],
    flag: "Hobby"
  },
  {
    id: "health-subscription",
    name: "Health subscription",
    shortDescription: "Site para gerenciamento de planos de saúde.",
    resume: "Criado como teste para um processo seletivo, o health subscription foi desenvolvido para permitir a inclusão de funcionários em determinados planos de saúde de acordo com os critérios pré-estabelecidos pelo avaliador. O usuário pode adicionar, editar e excluir os planos de forma que o formulário responda às alterações de forma dinâmica.",
    versions: [
      {
        tag: "1.0",
        repositories: [
          {
            name: "GitHub",
            ref: "App",
            link: "https://github.com/evelynsfranca/health_subscription"
          }
        ],
        links: {
          app: "https://health-subscription.vercel.app/"
        },
        description: process.env.BLOB_HOSTNAME + "/projects/details/health-subscription/1.0/description.html",
        type: "Web",
        technologies: [
          {
            name: "NextJS",
            version: "12.0.8"
          },
          {
            name: "ReactJS",
            version: "17.0.2"
          },
          {
            name: "TypeScript",
            version: "4.5.4"
          },
          {
            name: "CSS3"
          },
          {
            name: "Java",
            version: "11"
          },
          {
            name: "Spring Boot",
            version: "2.6.2"
          },
          {
            name: "Maven",
            version: "4.0.0"
          },
          {
            name: "MongoDB"
          }
        ],
        createdAt: "16/01/2022",
        updatedAt: "24/01/2022"
      }
    ],
    flag: "Hobby"
  }
];