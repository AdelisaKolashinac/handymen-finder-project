export interface RecommendedCardType {
  id: string;
  img: string;
  name: string;
  location: string;
  available: boolean;
  reviews: Review[];
  images: imageGallery[];
  description: string;
  jobTitle: string;
  postedAt: string;
}

export interface Review {
  rating: number;
  reviewText: string;
  reviewer: string;
}

export interface imageGallery {
  id: string;
  url: string;
  alt?: string;
}

export const recommendedResults: RecommendedCardType[] = [
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "I am free around noon to work . .. If you use a section of Lorem Ipsum, you have to make sure that nothing is hidden in the middle of the text .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "I am free around noon to work . .. If you use a section of Lorem Ipsum, you have to make sure that nothing is hidden in the middle of the text .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "I am free around noon to work . .. If you use a section of Lorem Ipsum, you have to make sure that nothing is hidden in the middle of the text .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "I am free around noon to work . .. If you use a section of Lorem Ipsum, you have to make sure that nothing is hidden in the middle of the text .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "I am free around noon to work . .. If you use a section of Lorem Ipsum, you have to make sure that nothing is hidden in the middle of the text .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
  {
    id: crypto.randomUUID(),
    img: "/picture-handyman.png",
    name: "Klaus Schneider",
    location: "Berlin, Germany",
    available: true,
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
    description:
      "I am free around noon to work . .. If you use a section of Lorem Ipsum, you have to make sure that nothing is hidden in the middle of the text .",
    jobTitle: "Plumber available for work",
    postedAt: "5 days ago",
  },
];
