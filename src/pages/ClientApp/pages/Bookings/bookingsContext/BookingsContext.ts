import { createContext, useContext } from "react";
import { BookingType } from "../bookingData";

type BookingsContextType = {
  bookings: BookingType[];
  setBookings: React.Dispatch<React.SetStateAction<BookingType[]>>;
  updateRating: (id: string, newRating: number) => void;
};

export const BookingsContext = createContext({} as BookingsContextType);
export const useBookingsContext = () => useContext(BookingsContext);
