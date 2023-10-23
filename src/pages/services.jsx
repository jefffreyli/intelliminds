import SectionHeader from "../components/SectionHeader";
import Services from "../components/Services/Services";

const services = () => {
  return (
    <div className="mx-6 sm:mx-10 md:mx-16">
      <SectionHeader
        title="Services"
        subtitle="See all our services, ranging from tutoring to college consulting."
      />
      <Services />
    </div>
  );
};

export default services;
