import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import CTA from "../components/Home/CTA";
import CollegeLogoCloud from "../components/Home/LogoCloud";

const Home = () => {
  return (
    <div className="bg-white">
      <meta
        name="description"
        content="IntelliMinds, College Consulting, Education Services, On-Demand Tutoring, Academic Advisors, Top College Admissions, Customized Learning Solutions, Flexible Education Platform, Expert Educators, Problem-Solving Guidance, Academic Success, Degree Achievement, Personalized Tutoring, Education Consulting, Student Support Services, New York City, NYC, new york, nyc, cheap, budget, nyc college consulting"
      />

      <Hero />
      <CollegeLogoCloud />
      <WhatWeDo />
      <CTA />
    </div>
  );
};

export default Home;
