import { CertificateListModel } from "@/models/CertificateModel";

export const certificates: CertificateListModel[] = [
    {
        institution: {
            name: "DIO - Digital Innovation One",
            url: "https://www.dio.me/",
            relevance: 0,
            image: {
                url: "/images/about/dio.png",
                alt: "DIO"
            }
        }, 
        certificates: [
            {
                id: "E23A49CE",
                name: "Introdução ao Ecossistema e Documentação Java",
                conclusion: "07/12/2022",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/E23A49CE"
            },
            {
                id: "E71E7057",
                name: "Fundamentos de Arquitetura de Sistemas",
                conclusion: "20/01/2021",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/E71E7057"
            },
            {
                id: "0D7540A4",
                name: "Primeiros passos para desenvolvimento web",
                conclusion: "20/01/2021",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/0D7540A4"
            },
            {
                id: "86179309",
                name: "Programação para internet com JavaScript",
                conclusion: "17/05/2020",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/86179309"
            },
            {
                id: "0BF98457",
                name: "Introdução ao GitHub e comandos para trabalhar em equipe",
                conclusion: "06/05/2020",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/0BF98457"
            },
            {
                id: "420D9F46",
                name: "Introdução ao Git e Controle de Versões",
                conclusion: "06/05/2020",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/420D9F46"
            },
            {
                id: "78600C95",
                name: "Lógica de Programação Essencial",
                conclusion: "05/05/2020",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/78600C95"
            },
            {
                id: "8A50F33F",
                name: "Construindo páginas para internet com Bootstrap",
                conclusion: "04/05/2020",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/8A50F33F"
            },
            {
                id: "563D3DD4",
                name: "Programação para internet com HTML5 e CSS3",
                conclusion: "04/05/2020",
                image: {
                    url: "/images/about/dio.png",
                    alt: "DIO"
                },
                link: "https://dio.me/certificate/563D3DD4"
            }
        ]
    },
    
    {
        institution: {
            name: "PUC-PR",
            url: "https://www.pucpr.br/",
            relevance: 1,
            image: {
                url: "/images/about/pucpr.png",
                alt: "PUC-PR"
            }
        }, 
        certificates: [
            {
                id: "1",
                name: "Análise e desenvolvimento de sistemas",
                conclusion: "07/12/2022",
                image: {
                    url: "/images/about/pucpr.png",
                    alt: "PUC-PR"
                }
            }
        ]
    }
]