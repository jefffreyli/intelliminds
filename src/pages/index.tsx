import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import CTA from "../components/Home/CTA";
import CollegeLogoCloud from "../components/Home/CollegeLogoCloud";

const Home: NextPage = () => {
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
