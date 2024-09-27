export interface ExperienceImageModel {
    alt: string;
    url: string;
}

export interface ExperienceModel {
    description: string;
    year: number;
    image: ExperienceImageModel;
}