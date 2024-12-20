import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ServiceModel {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    icon: IconProp;
    image: string;
}
