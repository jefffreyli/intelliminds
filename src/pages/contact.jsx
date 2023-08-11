import SectionHeader from "../components/SectionHeader";
import ContactCard from "../components/Contact/ContactCard";

export default function contact() {
  return (
    <div className="mx-6 sm:mx-10 md:mx-16 h-[80vh]">
      <SectionHeader title="Contact" />
      <ContactCard/>
    </div>
  );
}
