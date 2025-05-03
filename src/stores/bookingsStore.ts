import { create } from "zustand";
import { bookings } from "../data/data";
import { BookingType } from "../types/types";

interface BookingsStore {
  bookings: BookingType[];
}

export const useBookingsStore = create<BookingsStore>(() => ({
  bookings: bookings, 
}));

// const updateRating = (id: string, newRating: number) => {
//     setBookings((prevBookings) =>
//       prevBookings.map((booking) =>
//         booking.id === id ? { ...booking, rating: newRating } : booking
//       )
//     );
//   };
