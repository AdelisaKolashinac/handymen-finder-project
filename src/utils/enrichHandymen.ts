import { Handyman, Review } from "../types/types";
import { calculateAverageRating } from "./calculateAverageRating";

export function enrichHandymenWithReviews(
  handymen: Handyman[],
  reviews: Review[]
) {
  return handymen.map((hm) => {
    const handymanReviews = reviews.filter((rev) => rev.handymanId === hm.id);
    return {
      ...hm,
      averageRating: calculateAverageRating(handymanReviews),
      reviewsCount: handymanReviews.length,
    };
  });
}
