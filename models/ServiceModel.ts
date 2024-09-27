import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ServiceModel {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    icon: IconProp;
}
