export interface CertificateListModel {
    institution: CertificateInstitutionModel;
    certificates: CertificateModel[];
}

export interface CertificateInstitutionModel {
    name: string;
    url: string;
    relevance: number;
    image: {
        url: string;
        alt: string;
    }
}

export interface CertificateModel {
    id: string;
    name: string;
    conclusion: string;
    image: {
        url: string;
        alt: string;
    }
    link?: string;
}