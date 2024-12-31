export interface ExperienceImageModel {
    alt: string;
    url: string;
}

export interface ExperienceModel {
    title: string;
    description: string;
    year: number;
    image: ExperienceImageModel;
    technologies?: string[];
    link?: string;
}