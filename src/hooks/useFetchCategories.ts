import { useEffect, useState } from "react";
import { Category } from "../types/types";
import { API_URL } from "../config";

export function useFetchCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_URL}/categories`);
        if (!res.ok) throw new Error("Server responded with an error");
        const data = await res.json();
        setCategories(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Error loading categories.");
      }
    };

    fetchCategories();
  }, []);

  return { categories, error };
}
