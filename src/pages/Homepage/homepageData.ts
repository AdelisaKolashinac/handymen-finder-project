export interface Category {
  id: number;
  title: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Home Repair",
    image: "/homepage/categories/home-repair.png",
  },
  { id: 2, title: "Windows", image: "/homepage/categories/windows.png" },
  { id: 3, title: "Painter", image: "/homepage/categories/painter.png" },
  {
    id: 4,
    title: "Electrician",
    image: "/homepage/categories/electrician.png",
  },
  { id: 5, title: "A / C", image: "/homepage/categories/ac.png" },
  { id: 6, title: "Cleaning", image: "/homepage/categories/cleaning.png" },
  { id: 7, title: "Assembly", image: "/homepage/categories/assembly.png" },
  { id: 8, title: "Carpenter", image: "/homepage/categories/carpenter.png" },
  {
    id: 9,
    title: "Construction",
    image: "/homepage/categories/construction.png",
  },
  {
    id: 10,
    title: "Electrician",
    image: "/homepage/categories/electrician.png",
  },
  { id: 11, title: "A / C", image: "/homepage/categories/ac.png" },
  { id: 12, title: "Cleaning", image: "/homepage/categories/cleaning.png" },
  { id: 13, title: "Assembly", image: "/homepage/categories/assembly.png" },
  { id: 14, title: "Carpenter", image: "/homepage/categories/carpenter.png" },
  {
    id: 15,
    title: "Construction",
    image: "/homepage/categories/construction.png",
  },
];

export interface TopRated {
  id: number;
  category: string;
  img: string;
  name: string;
  performanceStats: string;
  location: string;
}

export const topRated: TopRated[] = [
  {
    id: 1,
    category: "SANITÄRREPARATUREN",
    img: "./homepage/topRated/marcus.png",
    name: "Marcus Shmidt",
    performanceStats: "38 Abgeschlossene Aufträge",
    location: "Ingolstadt",
  },
  {
    id: 2,
    category: "ELEKTROINSTALLATIONEN",
    img: "./homepage/topRated/johannes.png",
    name: "Johannes Fischer",
    performanceStats: "5.0 Kundenbewertungen",
    location: "Sassenberg",
  },
  {
    id: 3,
    category: "ELEKTROINSTALLATIONEN",
    img: "./homepage/topRated/johannes.png",
    name: "Johannes Fischer",
    performanceStats: "5.0 Kundenbewertungen",
    location: "Sassenberg",
  },
];

export interface NewCarpenter {
  id: number;
  img: string;
  name: string;
  specialty: string;
}

export const newCarpenters: NewCarpenter[] = [
  {
    id: 1,
    img: "/homepage/newCarpenters/peter.jpg",
    name: "Peter Schmidt",
    specialty: "Elektriker",
  },
  {
    id: 2,
    img: "/homepage/newCarpenters/hans.jpg",
    name: "Hans Müller",
    specialty: "Schlosser",
  },
  {
    id: 3,
    img: "/homepage/newCarpenters/jan.jpg",
    name: "Jan Fischer",
    specialty: "Sanitär",
  },
];

export interface HomepageReview {
  id: string;
  avatar: string;
  name: string;
  city: string;
  rating: number;
  description: string;
  images: HomepageReviewImage[];
}

export interface HomepageReviewImage {
  id: string;
  url: string;
  alt?: string;
}

export const customerReviews: HomepageReview[] = [
  {
    id: crypto.randomUUID(),
    name: "John Carter",
    city: "Dresden",
    avatar: "/homepage/reviews/john.jpg",
    rating: 5,
    description:
      "Die App hat es einfach gemacht, einen Tischler zu finden. Er hat meinen Kleiderschrank und meinen Badezimmer-Schrank gebaut, und sie sehen fantastisch aus!",
    images: [
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment1/apartment1-1.jpg",
        alt: "Kleiderschrank im Schlafzimmer",
      },
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment1/apartment1-2.jpg",
        alt: "Badezimmerschrank Detailansicht",
      },
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment1/apartment1-3.jpg",
        alt: "Badezimmerschrank frontal",
      },
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment1/apartment1-4.png",
        alt: "Gesamter Raumansicht",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Lena Müller",
    city: "Berlin",
    avatar: "/homepage/reviews/lena.jpg",
    rating: 5,
    description:
      "Dank dieser App konnte ich meine Fenster schnell und effizient austauschen lassen. Der Service war professionell und der Prozess reibungslos!",
    images: [
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment2/apartment2-1.jpg",
        alt: "Neue Fenster im Wohnzimmer",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    name: "Maximilian Schmidt",
    city: "München",
    avatar: "/homepage/reviews/maximilian.jpg",
    rating: 5,
    description:
      "Die App hat mir geholfen, einen Maler zu finden. Mein Wohnzimmer sieht jetzt perfekt aus!",
    images: [
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment3/apartment3-1.png",
        alt: "Frisch gestrichene Wohnzimmerwand",
      },
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment3/apartment3-2.png",
        alt: "Detailansicht der Wandfarbe",
      },
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment3/apartment3-3.png",
        alt: "Fensterbereich gestrichen",
      },
      {
        id: crypto.randomUUID(),
        url: "/homepage/reviews/apartment3/apartment3-4.png",
        alt: "Gesamte Wohnzimmeransicht",
      },
    ],
  },
];
