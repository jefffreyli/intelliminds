import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import CTA from "../components/Home/CTA";
import CollegeLogoCloud from "../components/Home/LogoCloud";

const Home = () => {
  return (
    <div>
      <Hero />
      <CollegeLogoCloud />
      <Features />
      <CTA />
    </div>
  );
};

export default Home;
