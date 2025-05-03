import {
  BookingType,
  CategoryType,
  HandymanType,
  ReviewCardType,
} from "../types/types";

export const handymen: HandymanType[] = [
  {
    id: crypto.randomUUID(),
    img: "/handymen/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
    available: true,
    jobTitle: "Heating specialist available for work",
    postedAt: "2025-05-01",
    reviews: [
      { rating: 5, reviewText: "Excellent work!", reviewer: "John Doe" },
      {
        rating: 4,
        reviewText: "Good service, but could be faster.",
        reviewer: "Jane Smith",
      },
      {
        rating: 4.8,
        reviewText: "Very professional and quick.",
        reviewer: "Mark Davis",
      },
      { rating: 5, reviewText: "Perfect job!", reviewer: "Emily Lee" },
    ],
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    imageGallery: [
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
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück.",
  },
  {
    id: crypto.randomUUID(),
    img: "/handymen/marcus.png",
    name: "Marcus Shmidt",
    location: "Ingolstadt",
    available: false,
    jobTitle: "Plumber available for work",
    postedAt: "2025-04-25",
    performanceStats: "38 Abgeschlossene Aufträge",
    reviews: [
      {
        rating: 4.5,
        reviewText: "Friendly and reliable.",
        reviewer: "Anna Kurz",
      },
      {
        rating: 4.9,
        reviewText: "Outstanding results!",
        reviewer: "Tim Berger",
      },
    ],
    categories: ["Plumbing", "Tiling", "Renovation"],
    description:
      "Experienced plumber and tiling expert. Specialized in bathroom and kitchen renovation. Currently fully booked until next week.",
  },
  {
    id: crypto.randomUUID(),
    img: "/handymen/johannes.png",
    name: "Johannes Fischer",
    location: "Sassenberg",
    available: true,
    jobTitle: "Electrician available for smart home setup",
    postedAt: "2025-05-02",
    performanceStats: "5.0 Kundenbewertungen",
    reviews: [
      {
        rating: 5,
        reviewText: "Super fast and clean work.",
        reviewer: "Lena Fischer",
      },
      {
        rating: 5,
        reviewText: "Excellent and reliable service.",
        reviewer: "Marius Weber",
      },
      {
        rating: 5,
        reviewText: "Very professional and punctual.",
        reviewer: "Anja Keller",
      },
      {
        rating: 5,
        reviewText: "Friendly and skilled electrician. Highly recommend!",
        reviewer: "Tim Schröder",
      },
      {
        rating: 5,
        reviewText: "Top-notch smart home installation. Works flawlessly.",
        reviewer: "Sophie Brandt",
      },
    ],
    categories: ["Electrical", "Smart Home", "Lighting"],
    description:
      "Electrician with a focus on smart home systems. Offers installations and upgrades for lighting, security, and automation.",
  },
  {
    id: crypto.randomUUID(),
    img: "/handymen/peter.jpg",
    name: "Peter Schmidt",
    location: "Herford",
    available: true,
    jobTitle: "Electrician available for smart home setup",
    postedAt: "2025-05-02",
    reviews: [
      {
        rating: 4.2,
        reviewText: "Solid work at a good price.",
        reviewer: "Nina Braun",
      },
      {
        rating: 4.7,
        reviewText: "Efficient and professional.",
        reviewer: "Kai Müller",
      },
      { rating: 5, reviewText: "Very reliable!", reviewer: "Sara Wolf" },
    ],
    categories: ["Painting", "Drywall", "Insulation"],
    description:
      "Offers high-quality painting and interior finishing. Perfect for new builds or renovations. Free quotes available.",
  },
  {
    id: crypto.randomUUID(),
    img: "/handymen/jan.jpg",
    name: "Jan Fischer",
    location: "Paderborn",
    available: false,
    jobTitle: "Roofer and carpenter available after vacation",
    postedAt: "2025-04-20",
    reviews: [
      {
        rating: 5,
        reviewText: "Couldn not ask for better!",
        reviewer: "Olaf Richter",
      },
      {
        rating: 4.3,
        reviewText: "Some delays, but great job.",
        reviewer: "Julia Schmid",
      },
    ],
    categories: ["Roofing", "Carpentry", "Gutters"],
    imageGallery: [
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
    description:
      "Roof repair and woodwork specialist. Available for seasonal check-ups and emergency leak repairs. Currently on vacation.",
  },
  {
    id: crypto.randomUUID(),
    img: "/handymen/hans.jpg",
    name: "Hans Becker",
    location: "Bielefeld",
    available: true,
    jobTitle: "Window and door expert available",
    postedAt: "2025-05-03",
    performanceStats: "25 erfolgreich abgeschlossene Projekte",
    reviews: [
      {
        rating: 5,
        reviewText: "Sehr professionell und freundlich.",
        reviewer: "Tobias Klein",
      },
      {
        rating: 4.7,
        reviewText: "Tolle Arbeit mit kleinen Verbesserungsvorschlägen.",
        reviewer: "Laura Schulte",
      },
    ],
    categories: ["Windows", "Doors", "Woodwork"],
    imageGallery: [
      {
        id: crypto.randomUUID(),
        src: "/reviews/apartment2/apartment2-1.jpg",
        alt: "Neue Fenster im Wohnzimmer",
      },
    ],
    description:
      "Spezialist für Fenster und Türen. Maßanfertigungen und Reparaturen mit Fokus auf Energieeffizienz und Langlebigkeit.",
  },
];

export const categories: CategoryType[] = [
  {
    id: 1,
    title: "Home Repair",
    image: "/categories/home-repair.png",
  },
  { id: 2, title: "Windows", image: "/categories/windows.png" },
  { id: 3, title: "Painter", image: "/categories/painter.png" },
  {
    id: 4,
    title: "Electrician",
    image: "/categories/electrician.png",
  },
  { id: 5, title: "A / C", image: "/categories/ac.png" },
  { id: 6, title: "Cleaning", image: "/categories/cleaning.png" },
  { id: 7, title: "Assembly", image: "/categories/assembly.png" },
  { id: 8, title: "Carpenter", image: "/categories/carpenter.png" },
  {
    id: 9,
    title: "Construction",
    image: "/categories/construction.png",
  },
  {
    id: 10,
    title: "Electrician",
    image: "/categories/electrician.png",
  },
  { id: 11, title: "A / C", image: "/categories/ac.png" },
  { id: 12, title: "Cleaning", image: "/categories/cleaning.png" },
  { id: 13, title: "Assembly", image: "/categories/assembly.png" },
  { id: 14, title: "Carpenter", image: "/categories/carpenter.png" },
  {
    id: 15,
    title: "Construction",
    image: "/categories/construction.png",
  },
];

export const customerReviews: ReviewCardType[] = [
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

export const bookings: BookingType[] = [
  {
    id: crypto.randomUUID(),
    status: "new",
    service: "Plumbing service",
    date: "'2025-05-03",
    time: "Morning 9 am",
    task: "Fix a leaking pipe",
    worker: "Klaus Schneider",
    locationLink: "#",
    rating: 0,
  },
  {
    id: crypto.randomUUID(),
    status: "ongoing",
    service: "Electrician",
    date: "Fri, 10 Nov",
    time: "Afternoon 2 pm",
    task: "Install ceiling lights",
    worker: "Anna Müller",
    locationLink: "#",
    rating: 0,
  },
  {
    id: crypto.randomUUID(),
    status: "completed",
    service: "Painter",
    date: "Mon, 6 Nov",
    time: "Morning 10 am",
    task: "Paint living room",
    worker: "John Doe",
    locationLink: "#",
    rating: 0,
  },
];
