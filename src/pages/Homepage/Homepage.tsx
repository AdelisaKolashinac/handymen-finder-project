import Navbar from "../../components/Navbar/Navbar";
import { RoleSwitcher } from "../../components/RoleSwitcher/RoleSwitcher";
import { HeroSection } from "./HeroSection/HeroSection";
import { InfoSection } from "./InfoSection/InfoSection";
import { ButtonContainer } from "./ButtonContainer/ButtonContainer";
import { TopRated } from "./TopRatedSection/TopRated";
import { ChatInfo } from "./ChatInfoSection/ChatInfo";
import { NewCarpenters } from "./NewCarpentersSection/NewCarpenters";
import BookTradesmen from "./BookTradesmenSection/BookTradesmen";
import { Footer } from "../../components/Footer/Footer";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { HomepageReviews } from "./HomepageReviews/HomepageReviews";
import { useRoleStore } from "../../stores/roleStore";

export default function Homepage() {
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
      <RoleSwitcher />
      <HeroSection />
      <ButtonContainer />
      <SearchInput />
      <InfoSection />
      <TopRated />
      <ChatInfo />
      <NewCarpenters />
      <HomepageReviews />
      <BookTradesmen />
      <Footer />
    </>
  );
}
