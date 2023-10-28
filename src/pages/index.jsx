import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import CTA from "../components/Home/CTA";
import CollegeLogoCloud from "../components/Home/LogoCloud";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <CollegeLogoCloud />
      <WhatWeDo />
      <CTA />
    </div>
  );
};

export default Home;
