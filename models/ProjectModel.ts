import { ProjectFlag } from "./ProjectFlagModel";
import { ProjectType } from "./ProjectTypeModel";

export interface ProjectImageModel {
    alt: string;
    url: string;
}

export interface ProjectTechnologyModel {
    name: string;
    version?: string;
}

export interface ProjectRepositoryModel {
    name: "GitLab" | "GitHub";
    ref: "API" | "App";
    link: string;
}

export interface ProjectVersion {
    tag: string;
    repositories: ProjectRepositoryModel[],
    links: {
        app?: string;
        api?: string;
    },
    description: string;
    images?: ProjectImageModel[];
    type: ProjectType;
    createdAt: string;
    updatedAt: string;
    technologies: ProjectTechnologyModel[];
}

export interface ProjectModel {
    id: string;
    name: string;
    shortDescription: string;
    resume: string;
    versions: ProjectVersion[];
    flag?: ProjectFlag;
}