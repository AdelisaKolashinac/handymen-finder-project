import { useEffect, useState } from "react";
import { Handyman } from "../types/types";
import { API_URL } from "../config";

export function useFetchHandymen() {
  const [handymen, setHandymen] = useState<Handyman[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHandymen = async () => {
      try {
        const res = await fetch(`${API_URL}/handymen`);
        if (!res.ok) throw new Error("Server responded with an error");
        const data = await res.json();
        setHandymen(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch handymen:", error);
        setError("Error loading handymen.");
      }
    };

    fetchHandymen();
  }, []);

  return { handymen, error };
}
