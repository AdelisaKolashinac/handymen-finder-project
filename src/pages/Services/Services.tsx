import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { RoleSwitcher } from "../../components/RoleSwitcher/RoleSwitcher";
import { useRoleStore } from "../../stores/roleStore";
import BookTradesmen from "../Homepage/BookTradesmenSection/BookTradesmen";
import HandymenResults from "./HandymenResults/HandymenResults";
import PublishAdBanner from "./PublishAdBanner/PublishAdBanner";

export default function Services() {
  const { isClient } = useRoleStore();

  if (!isClient) {
    return (
      <>
        <Navbar />
        <RoleSwitcher />
        <p>Handyman section</p>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <h1 className="title-h1">Find a craftsman</h1>
      <RoleSwitcher />
      <HandymenResults />
      <PublishAdBanner />
      <BookTradesmen />
      <Footer />
    </>
  );
}
