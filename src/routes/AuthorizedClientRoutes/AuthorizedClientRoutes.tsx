import { Navigate, Route, Routes } from "react-router-dom";
import BottomNav from "../../pages/ClientApp/components/BottomNav/BottomNav";
import { Chat } from "@mui/icons-material";
import Bookings from "../../pages/ClientApp/pages/Bookings/Bookings";
import { LeaveAReview } from "../../pages/ClientApp/pages/Bookings/LeaveAReview/LeaveAReview";
import Categories from "../../pages/ClientApp/pages/Categories/Categories";
import { EditClientProfile } from "../../pages/ClientApp/pages/Profile/EditClientProfile/EditClientProfile";
import Profile from "../../pages/ClientApp/pages/Profile/Profile";
import ClientHome from "../../pages/ClientApp/pages/ClientHome/ClientHome";

export default function AuthorizedClientRoutes() {
  return (
    <>
      <Routes>
        {/* Redirect root to client-home */}
        <Route path="/" element={<Navigate to="/client-home" replace />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/client-home" element={<ClientHome />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leave-review/:id" element={<LeaveAReview />} />
        <Route path="/edit-client-profile" element={<EditClientProfile />} />
      </Routes>
      <BottomNav />
    </>
  );
}
