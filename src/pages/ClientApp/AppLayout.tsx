import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bookings from "./pages/Bookings/Bookings";
import Categories from "./pages/Categories/Categories";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import BottomNav from "./components/BottomNav/BottomNav";
import { LeaveAReview } from "./pages/Bookings/LeaveAReview/LeaveAReview";
import { bookings } from "./pages/Bookings/bookingData";
import BookingsProvider from "./pages/Bookings/bookingsContext/BookingsProvider";

export default function AppLayout() {
  return (
    <BookingsProvider initialData={bookings}>
      <BrowserRouter>
        <Routes>
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leave-review/:id" element={<LeaveAReview />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </BookingsProvider>
  );
}
