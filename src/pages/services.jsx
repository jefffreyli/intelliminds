import SectionHeader from "../components/SectionHeader";
import Services from "../components/Services/Services";

const services = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 bg-white">
      <meta
      name="description"
      content="nyc college consulting, common app, scholarships, college essays, sat act tutoring, tutoring, SAT, ACT, transcript, GPA, grades, SHSAT, high school admissions, homework help"
      />
      <SectionHeader
        title="Services"
        subtitle="See all our services, ranging from tutoring to college consulting."
      />
      <Services />
    </div>
  );
};

export default services;
