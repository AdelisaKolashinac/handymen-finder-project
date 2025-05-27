import {
  ReviewCard,
} from "../types/types";


export const customerReviews: ReviewCard[] = [
  {
    id: crypto.randomUUID(),
    name: "John Carter",
    city: "Dresden",
    avatar: "/reviews/john.jpg",
    rating: 5,
    description:
      "Die App hat es einfach gemacht, einen Tischler zu finden. Er hat meinen Kleiderschrank und meinen Badezimmer-Schrank gebaut, und sie sehen fantastisch aus!",
    images: [
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment1/apartment1-1.jpg",
        alt: "Kleiderschrank im Schlafzimmer",
      },
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment1/apartment1-2.jpg",
        alt: "Badezimmerschrank Detailansicht",
      },
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment1/apartment1-3.jpg",
        alt: "Badezimmerschrank frontal",
      },
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment1/apartment1-4.png",
        alt: "Gesamter Raumansicht",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Lena Müller",
    city: "Berlin",
    avatar: "/reviews/lena.jpg",
    rating: 5,
    description:
      "Dank dieser App konnte ich meine Fenster schnell und effizient austauschen lassen. Der Service war professionell und der Prozess reibungslos!",
    images: [
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment2/apartment2-1.jpg",
        alt: "Neue Fenster im Wohnzimmer",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Maximilian Schmidt",
    city: "München",
    avatar: "/reviews/maximilian.jpg",
    rating: 5,
    description:
      "Die App hat mir geholfen, einen Maler zu finden. Mein Wohnzimmer sieht jetzt perfekt aus!",
    images: [
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment3/apartment3-1.png",
        alt: "Frisch gestrichene Wohnzimmerwand",
      },
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment3/apartment3-2.png",
        alt: "Detailansicht der Wandfarbe",
      },
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment3/apartment3-3.png",
        alt: "Fensterbereich gestrichen",
      },
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment3/apartment3-4.png",
        alt: "Gesamte Wohnzimmeransicht",
      },
    ],
  },
];

