import { useState } from "react";
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
import { SearchInput } from "./SearchInput/SearchInput";
import { HomepageReviews } from "./HomepageReviews/HomepageReviews";

export default function Homepage() {
  const [isClient, setIsClient] = useState(true);

  const handleSwitch = () => {
    setIsClient((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <RoleSwitcher isClient={isClient} handleSwitch={handleSwitch} />
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
