import { useUserStore } from "../stores/userStore";
import AuthorizedClientRoutes from "./AuthorizedClientRoutes/AuthorizedClientRoutes";
import UnauthorizedClientRoutes from "./UnauthorizedClientRoutes/UnauthorizedClientRoutes";

export default function MainClientRouter() {
  const user = useUserStore((state) => state.user);

  if (user) {
    return <AuthorizedClientRoutes />;
  } else {
    return <UnauthorizedClientRoutes />;
  }
}
