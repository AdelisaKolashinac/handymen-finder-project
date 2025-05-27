import { useEffect, useState } from "react";
import { Review } from "../types/types";
import { API_URL } from "../config";

export function useFetchReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`${API_URL}/reviews`);
        if (!res.ok) throw new Error("Server responded with an error");
        const data = await res.json();
        setReviews(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setError("Error loading reviews.");
      }
    };

    fetchReviews();
  }, []);

  return { reviews, error };
}
