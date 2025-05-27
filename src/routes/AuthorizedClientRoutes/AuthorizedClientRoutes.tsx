import { Navigate, Route, Routes } from "react-router-dom";
import BottomNav from "../../pages/ClientApp/components/BottomNav/BottomNav";
import Bookings from "../../pages/ClientApp/pages/Bookings/Bookings";
import { LeaveAReview } from "../../pages/ClientApp/pages/Bookings/LeaveAReview/LeaveAReview";
import Categories from "../../pages/ClientApp/pages/Categories/Categories";
import { EditClientProfile } from "../../pages/ClientApp/pages/Profile/EditClientProfile/EditClientProfile";
import Profile from "../../pages/ClientApp/pages/Profile/Profile";
import ClientHome from "../../pages/ClientApp/pages/ClientHome/ClientHome";
import { PostAd } from "../../pages/ClientApp/pages/Profile/PostAd/PostAd";
import ChatList from "../../pages/ClientApp/pages/Chat/ChatList/ChatList";
import HandymanPublicProfile from "../../pages/HandymanPublicProfile-clientViews/HandymanPublicProfile";
import BookingCalendar from "../../pages/BookHandymen/BookingCalendar/BookingCalendar";
import BookingDetails from "../../pages/BookHandymen/BookingDetails/BookingDetails";
import EnterLocation from "../../pages/BookHandymen/EnterLocation/EnterLocation";
import ChatPage from "../../pages/ClientApp/pages/Chat/ChatPage/ChatPage";

export default function AuthorizedClientRoutes() {
  return (
    <>
      <Routes>
        {/* Redirect root to client-home */}
        <Route path="/" element={<Navigate to="/client-home" replace />} />
        <Route path="/client-bookings" element={<Bookings />} />
        <Route path="/client-categories" element={<Categories />} />
        <Route path="/client-home" element={<ClientHome />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chat/:chatId" element={<ChatPage />} />
        <Route path="/client-profile" element={<Profile />} />
        <Route path="/leave-review" element={<LeaveAReview />} />
        <Route path="/client-edit-profile" element={<EditClientProfile />} />
        <Route path="/client-post-ad" element={<PostAd />} />
        <Route
          path="/handyman-public-profile/:id"
          element={<HandymanPublicProfile />}
        />
        <Route path="/book-handyman/:id" element={<BookingCalendar />} />
        <Route path="/booking-details/:id" element={<BookingDetails />} />
        <Route path="/enter-location" element={<EnterLocation />} />
      </Routes>
      <BottomNav />
    </>
  );
}
