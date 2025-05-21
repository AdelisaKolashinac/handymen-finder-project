export interface User {
  id: string;
  fullname: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phone: string;
  type: "CLIENT" | "HANDYMAN";
  provider?: "GOOGLE" | "EMAIL";
  location?: string;
  reviews?: Review[];
  notifyEmail?: boolean;
  notifySMS?: boolean;
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface Review {
  id: string;
  handymanId: string;
  rating: number;
  reviewText: string;
  reviewer: string;
  createdAt?: string;
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
  jobTitle: string;
  createdAt?: string;
  performanceStats?: string;
  reviews: Review[];
  categories: string[];
  services?: string[];
  imageGallery?: ImageGallery[];
  description: string;
  availability?: {
    [key: string]: string[];
  };
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
  availability: string[];
}

export interface Ad {
  id: string;
  userId?: string;
  tag: string;
  urgency: string;
  service: string;
  description: string;
  createdAt: string;
  status: string;
  location: string;
  imageGallery?: UploadedImage[];
  termsAccepted?: boolean;
}

interface UploadedImage {
  id: string;
  name: string;
  base64: string;
  file?: File;
}

export interface Message {
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
}
