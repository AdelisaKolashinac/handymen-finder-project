import { useEffect, useState } from "react";
import BookingCard from "./BookingCard/BookingCard";
import styles from "./Bookings.module.css";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { Booking } from "../../../../types/types";
import { API_URL } from "../../../../config";
import { useFetchHandymen } from "../../../../hooks/useFetchHandymen";
import { useUserStore } from "../../../../stores/userStore";

export type BookingStatus = "new" | "ongoing" | "completed";

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<BookingStatus>("new");

  const user = useUserStore((state) => state.user);
  const { handymen } = useFetchHandymen();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`${API_URL}/bookings`);

        if (!res.ok) throw new Error("Server responded with an error");

        const data = await res.json();
        setBookings(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
        setError("Error loading bookings.");
      }
    };

    fetchBookings();
  }, []);

  const filteredBookings = bookings
    .filter((b) => b.senderRole === "handyman")
    .filter((b) => b.userId === user?.id)
    .filter((b) => {
      if (filter === "new") {
        return b.status === "new" && b.senderRole === "handyman";
      }
      return b.status === filter;
    });

  const handleAccept = async (bookingId: string) => {
    const res = await fetch(`${API_URL}/bookings/${bookingId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status: "ongoing",
      }),
    });

    if (!res.ok) throw new Error("Failed to update booking.");
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "ongoing" } : b))
    );
  };

  const handleRefuse = async (bookingId: string) => {
    const res = await fetch(`${API_URL}/bookings/${bookingId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete booking.");
    }

    setBookings((prev) => prev.filter((b) => b.id !== bookingId));
  };

  const handleReopen = async (bookingId: string) => {
    const res = await fetch(`${API_URL}/bookings/${bookingId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        status: "ongoing",
      }),
    });

    if (!res.ok) throw new Error("Failed to reopen booking.");

    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: "ongoing" } : b))
    );
  };

  return (
    <section className={`wrapper ${styles.bookings}`}>
      <ClientAppHeader title="My bookings" />
      <div className={styles.bookings__buttonContainer}>
        <button
          className={`${styles.bookings__button} ${
            filter === "new" ? styles.activeStatus : ""
          }`}
          onClick={() => setFilter("new")}
        >
          New proposals (
          {
            bookings.filter(
              (b) =>
                b.status === "new" &&
                b.senderRole === "handyman" &&
                b.userId === user?.id
            ).length
          }
          )
        </button>
        <button
          className={`${styles.bookings__button} ${
            filter === "ongoing" ? styles.activeStatus : ""
          }`}
          onClick={() => setFilter("ongoing")}
        >
          Ongoing
        </button>
        <button
          className={`${styles.bookings__button} ${
            filter === "completed" ? styles.activeStatus : ""
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      {error && <p className="errorMessage">{error}</p>}
      <div>
        {filteredBookings.map((booking) => {
          const handyman = handymen.find((hm) => hm.id === booking.handymanId);

          if (!handyman) {
            <p>Loading...</p>;
            return;
          }

          return (
            <BookingCard
              key={booking.id}
              booking={booking}
              handyman={handyman}
              onAccept={() => handleAccept(booking.id)}
              onRefuse={() => handleRefuse(booking.id)}
              onReopen={() => handleReopen(booking.id)}
            />
          );
        })}
      </div>
    </section>
  );
}
