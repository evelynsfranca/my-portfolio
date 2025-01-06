import { ProjectFlag } from "./ProjectFlagModel";
import { ProjectType } from "./ProjectTypeModel";

export interface ProjectImageModel {
    alt: string;
    url: string;
}

export interface ProjectVersion {
    tag: string;
    repository: {
        name: "GitLab" | "GitHub";
        link: string;
    },
    links: {
        app?: string;
        api?: string;
    },
    createdAt: string;
    updatedAt: string;
    technologies: string[];
}

export interface ProjectModel {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    images?: ProjectImageModel[];
    versions: ProjectVersion[];
    flag?: ProjectFlag;
    type: ProjectType;
}