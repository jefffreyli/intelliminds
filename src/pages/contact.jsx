import SectionHeader from "../components/SectionHeader";
import ContactCard from "../components/Contact/ContactCard";

export default function contact() {
  return (
    <div className="px-6 sm:px-10 md:px-16 h-[80vh] bg-white">
      <meta
        name="description"
        content="Contact IntelliMinds for general inquiries or to schedule meetings with our founders. Email us at intellimindsbr@gmail.com. Join our community on Discord to engage with clients and get answers to your questions during these stressful times. Join us at https://discord.gg/7PzzEJDnbj."
      />

      <SectionHeader title="Contact" />
      <ContactCard />
    </div>
  );
}
