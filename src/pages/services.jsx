import SectionHeader from "../components/SectionHeader";
import Services from "../components/Services/Services";

const services = () => {
  return (
    <div>
      <SectionHeader
        title="Services"
        subtitle="Start building for free, then add a site plan to go live. Account plans unlock additional features."
      />
      <Services />
    </div>
  );
};

export default services;
