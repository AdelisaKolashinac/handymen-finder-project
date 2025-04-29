import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { RoleSwitcher } from "../../components/RoleSwitcher/RoleSwitcher";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import BookTradesmen from "../Homepage/BookTradesmenSection/BookTradesmen";
import HandymenResults from "./HandymenResults/HandymenResults";
import PublishAdBanner from "./PublishAdBanner/PublishAdBanner";

export default function FindAHandyman() {
  return (
    <>
      <Navbar />
      <h1 className="title-h1">Find a craftsman</h1>
      <RoleSwitcher />
      <SearchInput />
      <HandymenResults />
      <PublishAdBanner />
      <BookTradesmen />
      <Footer />
    </>
  );
}
