import { useState } from "react";
import BookingCard from "./BookingCard/BookingCard";
import styles from "./Bookings.module.css";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { useBookingsStore } from "../../../../stores/bookingsStore";

export type BookingStatus = "new" | "ongoing" | "completed";

export default function Bookings() {
  const [filter, setFilter] = useState<BookingStatus>("new");

  const bookings = useBookingsStore((state) => state.bookings);

  const filteredBookings = bookings.filter(
    (booking) => booking.status === filter
  );

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
          New proposals ({bookings.filter((b) => b.status === "new").length})
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
      {filteredBookings.map((booking) => (
        <BookingCard key={booking.id} booking={booking} />
      ))}
    </section>
  );
}
