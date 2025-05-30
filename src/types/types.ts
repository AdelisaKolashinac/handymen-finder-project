import { Timestamp } from "firebase/firestore";

export interface User {
  id: string;
  fullname: string;
  img?: string;
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

export interface Handyman {
  id: string;
  img: string;
  name: string;
  location: string;
  available: string;
  jobTitle: string;
  createdAt: string;
  performanceStats?: string;
  categories: string[];
  services?: string[];
  imageGallery?: ImageGallery[];
  description: string;
  availability?: {
    [key: string]: string[];
  };
}

export interface Category {
  id: string;
  title: string;
  image: string;
}

export interface Review {
  id: string;
  handymanId: string;
  reviewerId: string;
  reviewer: string;
  rating: number;
  comment?: string;
  imageGallery?: UploadedImage[];
  createdAt: string;
}

export interface ImageGallery {
  id: string;
  src: string;
  alt: string;
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
  userId: string;
  handymanId: string;
  senderRole: "user" | "handyman";
  status: "new" | "ongoing" | "completed" | "refused";
  date: string;
  time: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: any;
  message?: string;
  createdAt: string;
  service?: string;
}

export interface FilterValues {
  categories?: string[];
  services?: string[];
  availability?: string[];
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

export interface ChatPreview {
  id: string;
  participants: string[];
  lastMessage: string;
  lastUpdated: Timestamp; 
  otherUserName: string;
  otherUserImg: string;
}

export interface MessageType {
  id: string;
  senderId: string;
  text: string;
  createdAt: Timestamp | null;
}
