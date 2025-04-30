import React, { useState } from "react";
import { BookingType } from "../bookingData";
import { BookingsContext } from "./BookingsContext";

interface Props {
  children: React.ReactNode;
  initialData: BookingType[];
}

const BookingsProivder = ({ children, initialData }: Props) => {
  const [bookings, setBookings] = useState<BookingType[]>(initialData);

  const updateRating = (id: string, newRating: number) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, rating: newRating } : booking
      )
    );
  };

  const value = {
    bookings,
    setBookings,
    updateRating,
  };
  return (
    <BookingsContext.Provider value={value}>
      {children}
    </BookingsContext.Provider>
  );
};
export default BookingsProivder;
