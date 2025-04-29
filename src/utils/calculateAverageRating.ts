export const calculateAverageRating = (
  reviews: { rating: number }[]
): number => {
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  return reviews.length ? total / reviews.length : 0;
};
