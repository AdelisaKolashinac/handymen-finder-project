import { Navigate, Route, Routes } from "react-router-dom";
import BottomNav from "../../pages/ClientApp/components/BottomNav/BottomNav";
import { Chat } from "@mui/icons-material";
import Bookings from "../../pages/ClientApp/pages/Bookings/Bookings";
import { LeaveAReview } from "../../pages/ClientApp/pages/Bookings/LeaveAReview/LeaveAReview";
import Categories from "../../pages/ClientApp/pages/Categories/Categories";
import { EditClientProfile } from "../../pages/ClientApp/pages/Profile/EditClientProfile/EditClientProfile";
import Profile from "../../pages/ClientApp/pages/Profile/Profile";
import ClientHome from "../../pages/ClientApp/pages/ClientHome/ClientHome";
import { PostAd } from "../../pages/ClientApp/pages/Profile/PostAd/PostAd";

export default function AuthorizedClientRoutes() {
  return (
    <>
      <Routes>
        {/* Redirect root to client-home */}
        <Route path="/" element={<Navigate to="/client-home" replace />} />
        <Route path="/client-bookings" element={<Bookings />} />
        <Route path="/client-categories" element={<Categories />} />
        <Route path="/client-home" element={<ClientHome />} />
        <Route path="/client-chat" element={<Chat />} />
        <Route path="/client-profile" element={<Profile />} />
        <Route path="/leave-review/:id" element={<LeaveAReview />} />
        <Route path="/client-edit-profile" element={<EditClientProfile />} />
        <Route path="/client-post-ad" element={<PostAd />} />
      </Routes>
      <BottomNav />
    </>
  );
}
