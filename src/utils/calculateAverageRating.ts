import { Review } from "../types/types";

export const calculateAverageRating = (reviews: Review[]): number => {
  if (!reviews.length) return 0;
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
};
