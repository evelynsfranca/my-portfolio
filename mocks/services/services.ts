import { ServiceModel } from "@/models/ServiceModel";
import { faChartSimple, faComputer, faDesktop, faTerminal } from "@fortawesome/free-solid-svg-icons";

export const services: ServiceModel[] = [
    {
        id: 1,
        title: "Desenvolvimento Web",
        shortDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat assumenda voluptas obcaecati. Nostrum eum deleniti laboriosam ullam nobis inventore debitis vero. Beatae molestiae iusto sapiente libero commodi, fuga suscipit?",
        description:
            `1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
      `,
        icon: faComputer
    },
    {
        id: 2,
        title: "Desenvolvimento de Aplicativos",
        shortDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat assumenda voluptas obcaecati. Nostrum eum deleniti laboriosam ullam nobis inventore debitis vero. Beatae molestiae iusto sapiente libero commodi, fuga suscipit?",
        description:
            `1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
        `,
        icon: faDesktop
    },
    {
        id: 3,
        title: "Service 3",
        shortDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat assumenda voluptas obcaecati. Nostrum eum deleniti laboriosam ullam nobis inventore debitis vero. Beatae molestiae iusto sapiente libero commodi, fuga suscipit?",
        description:
            `1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
        `,
        icon: faTerminal
    },
    {
        id: 4,
        title: "Service 4",
        shortDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque fugiat assumenda voluptas obcaecati. Nostrum eum deleniti laboriosam ullam nobis inventore debitis vero. Beatae molestiae iusto sapiente libero commodi, fuga suscipit?",
        description:
            `1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aut nisi velit rem asperiores est labore laboriosam cupiditate? Quam repudiandae quibusdam dicta magni odio consequatur error beatae dolores non similique.
        `,
        icon: faChartSimple
    }
];