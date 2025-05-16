import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
  const navigate = useNavigate();

  const homepage = () => navigate("/");
  const services = () => navigate("/services");
  const signup = () => navigate("/signup");
  const userApp = () => navigate("/user-app");

  return { homepage, services, signup, userApp, navigate };
};
