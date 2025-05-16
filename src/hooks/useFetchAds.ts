import { useEffect, useState } from "react";
import { Ad } from "../types/types";
import { API_URL } from "../config";

export function useFetchAds(userId?: string) {
  const [ads, setAds] = useState<Ad[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const url = userId
          ? `${API_URL}/ads?userId=${userId}`
          : `${API_URL}/ads`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Server responded with an error");
        const data = await res.json();
        setAds(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch ads:", error);
        setError("Error loading ads.");
      }
    };

    fetchAds();
  }, [userId]);

  return { ads, error };
}
