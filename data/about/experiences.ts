import { ExperienceModel } from "@/models/ExperienceModel";

export const experiences: ExperienceModel[] = [
  {
    title: "Grupo Marista",
    description: "Trabalho no desenvolvimento de soluções de tecnologia para a empresa, utilizando ferramentas na nuvem para criar sistemas eficientes e seguros. Minha função é garantir que as soluções de software sejam bem estruturadas, escaláveis e atendam às necessidades do negócio.",
    year: 2022,
    link: "https://grupomarista.org.br/",
    image: {
      alt: "grupo marista logo",
      url: "/images/about/grupo-marista-trans.png"
    },
    technologies: ["Azure", "Azure DevOps", "Logic Apps", "Function Apps", "Terraform", "Docker", "Kubernetes", "Git", "Spring", "ReactJS", "Gradle"]
  },
  {
    title: "NBW Digital",
    description: "Fui responsável por criar e manter sistemas de e-commerce, ajudando a melhorar a plataforma de vendas online. Trabalhei com tecnologias que garantiram a estabilidade e o bom funcionamento do site para os clientes.",
    year: 2022,
    link: "https://nbwdigital.com.br/",
    image: {
      alt: "nbw digital logo",
      url: "/images/about/nbw.png"
    },
    technologies: ["Java", "Oracle Database", "Vaadin", "Git", "GitLab", "Confluence", "Jira"]
  },
  {
    title: "PUC-PR",
    description: "Formada em Análise e Desenvolvimento de Sistemas pela PUC-PR, onde adquiri uma sólida base de conhecimento em programação, banco de dados e desenvolvimento de sistemas. Durante o curso, desenvolvi habilidades práticas em diversas tecnologias e aprendi a criar soluções de software para atender a diferentes necessidades de negócios.",
    year: 2021,
    link: "",
    image: {
      alt: "pucpr",
      url: "/images/about/pucpr2.png"
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "Java", "Python", "PHP", "MySQL", "Xampp", "NextJS", "AWS"]
  },
  {
    title: "Giro.tech",
    description: "Desenvolvi e mantive aplicativos voltados para o mercado financeiro, criando soluções que ajudam as empresas a gerenciar seus processos financeiros de forma mais eficaz. Meu trabalho ajudou a criar sistemas rápidos e seguros. ",
    year: 2020,
    link: "https://giro.tech/",
    image: {
      alt: "giro.tech logo",
      url: "/images/about/giro.svg"
    },
    technologies: ["ReactJS", "TypeScript", "Spring", "Java", "Liquibase", "MySQL", "Docker", "Git", "GitHub", "Jenkins", "AWS", "Ubuntu"]
  },
  {
    title: "PUC-PR",
    description: "Iniciei minha formação em Análise e Desenvolvimento de Sistemas pela PUC-PR.",
    year: 2019,
    link: "https://pucpr.br/",
    image: {
      alt: "pucpr",
      url: "/images/about/pucpr2.png"
    }
  }, 
  {
    title: "Início",
    description: "Tive meu primeiro contato com a programação e iniciei meus estudos de forma autônoma e auxiliando em alguns projetos.",
    year: 2018,
    image: {
      alt: "pucpr",
      url: "/images/about/pucpr2.png"
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "JQuery", "PHP", "MySQL", "Xampp"]
  },
];