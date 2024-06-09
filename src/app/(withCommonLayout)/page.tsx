import AboutUs from "@/components/UI/HomePage/AboutUs/AboutUs";
import CoverageArea from "@/components/UI/HomePage/CoverageArea/CoverageArea";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import SuccessStory from "@/components/UI/HomePage/SuccessStory/SuccessStory";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <CoverageArea />
      <SuccessStory />
    </>
  );
};

export default HomePage;
