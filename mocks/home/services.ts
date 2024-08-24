import { ServiceProps } from "@/app/home/features/services";
import { faChartSimple, faComputer, faDesktop, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const services: ServiceProps[] = [
    {
        id: 1,
        title: "Service 1",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
        icon: faComputer,
    },
    {
        id: 2,
        title: "Service 2",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
        icon: faDesktop,
    },
    {
        id: 3,
        title: "Service 3",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
        icon: faTerminal,
    },
    {
        id: 4,
        title: "Service 4",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.",
        icon: faChartSimple,
    },
];