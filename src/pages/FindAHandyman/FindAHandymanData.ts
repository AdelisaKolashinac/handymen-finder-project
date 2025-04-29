export interface HandymanResultType {
  id: string;
  img: string;
  name: string;
  location: string;
  available: boolean;
  reviews: Review[];
  categories: string[];
  description: string;
}

export interface Review {
  rating: number;
  reviewText: string;
  reviewer: string;
}

export const handymanResults: HandymanResultType[] = [
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
  {
    id: crypto.randomUUID(),
    img: "/findAHandyman/handyman.jpg",
    name: "Klaus Schneider",
    location: "Rheda-Wiedenbrück",
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
    categories: ["Heating", "Sanitary", "A/C", "Solar systems"],
    description:
      "10+ years of experience in the industry. Available for urgent missions. Active in the entire region around Rheda-Wiedenbrück .",
  },
];
