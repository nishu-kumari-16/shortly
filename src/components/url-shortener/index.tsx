import HeroSection from "./heroSection";
import Header from "./header";
import SearchContainer from "./search";
import AdvancedStatistics from "./advancedStatistics";
import BoostLinks from "./boostLink";
import Footer from "./footer";

const URLShortener = () => {
  const links = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Resources" },
  ];
  return (
    <div className="flex flex-col h-full bg-white overflow-y-overlay overflow-x-hidden ::webkit-scrollbar-hidden">
      <Header appName="Shortly" tabs={links} />
      <HeroSection />
      <div className="bg-gray h-fit pb-[4rem] flex flex-col gap-[4rem]">
        <SearchContainer />
        <AdvancedStatistics />
      </div>
      <BoostLinks />
      <Footer />
    </div>
  );
};
export default URLShortener;
