import { useEffect, useState } from "react";
import { User } from "../types/types";
import { API_URL } from "../config";

export function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/users`);
        if (!res.ok) throw new Error("Server responded with an error");
        const data = await res.json();
        setUsers(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setError("Error loading users.");
      }
    };

    fetchUsers();
  }, []);

  return { users, error };
}
