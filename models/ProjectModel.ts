export interface ProjectImageModel {
    alt: string;
    url: string;
}

export interface ProjectModel {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    link: string;
    repo: string;
    images?: ProjectImageModel[];
}