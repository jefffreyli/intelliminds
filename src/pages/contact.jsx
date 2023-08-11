import SectionHeader from "../components/SectionHeader";
import ContactCard from "../components/Contact/ContactCard";

export default function contact() {
  return (
    <div className="mx-16 h-screen">
      <SectionHeader title="Contact" />
      <ContactCard/>
    </div>
  );
}
