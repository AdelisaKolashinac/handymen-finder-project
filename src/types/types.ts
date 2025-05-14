export interface User {
  id: string;
  fullname: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phone: string;
  type: "CLIENT" | "HANDYMAN";
  provider?: "GOOGLE";
  location?: string;
  reviews?: Review[],
  notifyEmail?: boolean;
  notifySMS?: boolean;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface Review {
  rating: number;
  reviewText: string;
  reviewer: string;
}

export interface ImageGallery {
  id: string;
  src: string;
  alt: string;
}

export interface Handyman {
  id: string;
  img: string;
  name: string;
  location: string;
  available: string;
  jobTitle?: string;
  postedAt?: string;
  performanceStats?: string;
  reviews: Review[];
  categories: string[];
  imageGallery?: ImageGallery[];
  description: string;
}

export interface ReviewCard {
  id: string;
  avatar: string;
  name: string;
  city: string;
  rating: number;
  description: string;
  images: ImageGallery[];
}

export interface Booking {
  id: string;
  clientId?: string;
  handymanId?: string;
  status: "new" | "ongoing" | "completed";
  service: string;
  date: string;
  time: string;
  task: string;
  worker: string;
  locationLink: string;
  rating?: number;
}

export interface FilterValues {
  services: string[];
  // ratings: string[];
  availability: string[];
}

export interface Ad {
  id: string;
  img: string;
  name: string | undefined;
  tag: string;
  urgency: "immediate" | "flexible" | string;
  service: string;
  description: string;
  location: string;
  imageGallery?: string[];
  termsAccepted: boolean;
  userId: string | undefined;
}

export interface Filters {
  location: string;
  jobTitle: string;
  available: string;
}

export interface Message {
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}
