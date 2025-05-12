import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import SignupAsUser from "../../pages/SignupAsUser/pages/SignupAsUser/SignupAsUser";
import Services from "../../pages/Services/Services";
import SigninAsUser from "../../pages/SignupAsUser/pages/SigninAsUser/SigninAsUser";

export default function UnauthorizedClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<SignupAsUser />} />
      <Route path="/sign-in" element={<SigninAsUser />} />
    </Routes>
  );
}
