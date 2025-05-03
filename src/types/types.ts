export interface UserType {
  fullname: string;
  email: string;
  password: string | undefined;
  confirmPassword: string | undefined;
  phone: string;
  type: "CLIENT" | "HANDYMAN";
  provider?: "GOOGLE";
}

export interface CategoryType {
  id: number;
  title: string;
  image: string;
}

export interface ReviewType {
  rating: number;
  reviewText: string;
  reviewer: string;
}

export interface ImageGallery {
  id: string;
  src: string;
  alt: string;
}

export interface HandymanType {
  id: string;
  img: string;
  name: string;
  location: string;
  available: boolean;
  jobTitle?: string;
  postedAt: string;
  performanceStats?: string;
  reviews: ReviewType[];
  categories: string[];
  imageGallery?: ImageGallery[];
  description: string;
}

export interface ReviewCardType {
  id: string;
  avatar: string;
  name: string;
  city: string;
  rating: number;
  description: string;
  images: ImageGallery[];
}

export interface BookingType {
  id: string;
  status: "new" | "ongoing" | "completed";
  service: string;
  date: string;
  time: string;
  task: string;
  worker: string;
  locationLink: string;
  rating?: number;
}
