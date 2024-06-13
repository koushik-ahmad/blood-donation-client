import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import BloodDonors from "@/components/UI/HomePage/BloodDonors/BloodDonors";
import CoverageAreaPage from "@/components/UI/HomePage/CoverageArea/CoverageAreaPage";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SuccessStory from "@/components/UI/HomePage/SuccessStory/SuccessStory";
import TopDonors from "@/components/UI/HomePage/TopDonors/TopDonors";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <BloodDonors />
      <TopDonors />
      <CoverageAreaPage />
      <SuccessStory />
    </>
  );
};

export default HomePage;
