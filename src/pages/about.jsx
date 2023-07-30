import SectionHeader from "@/components/SectionHeader";
import Team from "../components/About/Team";

export default function about() {
  return (
    <div>
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-16">
      <SectionHeader
        title="Meet the Team"
        subtitle="The people who balh belh bleh blah"
      />
      </div>
      <Team />
    </div>
  );
}
