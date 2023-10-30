import SectionHeader from "../components/SectionHeader";
import Services from "../components/Services/Services";

const services = () => {
  return (
    <div className="px-6 sm:px-10 md:x-16 bg-white">
      <SectionHeader
        title="Services"
        subtitle="See all our services, ranging from tutoring to college consulting."
      />
      <Services />
    </div>
  );
};

export default services;
