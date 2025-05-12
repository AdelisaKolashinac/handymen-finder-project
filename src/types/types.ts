export interface UserType {
  id?: string;
  fullname: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  phone: string;
  type?: "CLIENT" | "HANDYMAN";
  provider?: "GOOGLE";
  location?: string;
  notifyEmail?: boolean;
  notifySMS?: boolean;
}

export interface CategoryType {
  id: string;
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
  available: string;
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