import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Services() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
      
      <Service
        title="1 on 1 College Consulting"
        subtitle="We will pair you with tutors who have either attended your dream
        schools or institutions with similar academic excellence,
        ensuring you receive guidance from those who understand your
        aspirations firsthand. Our aim is to connect you with mentors
        who can not only help you reach your academic goals but also
        inspire you to excel and achieve your dream school admission."
        features={collegeConsultingFeatures}
        price="300"
      />


      <Service
        title="SAT & ACT Tutoring"
        subtitle="Elevate your SAT/ACT scores with our expert tutoring services.
          Receive personalized feedback and targeted guidance to excel
          in the reading, writing, and math sections of these crucial
          exams."
        features={testPrepFeatures}
        price="200"
      />

      <Service
        title="Transcript & GPA"
        subtitle="Elevate your academic journey with our services. We specialize
        in transcript and GPA improvements, as well as comprehensive
        support for coursework, homework, and test preparation to help
        you excel academically."
        features={transcriptFeatures}
        price="75"
      />

      <Service
        title="SHSAT (NYC Only)"
        subtitle="Prepare effectively for the SHSAT with our experienced tutors (from Stuyvesant and Bronx Science) covering reading, writing, and math sections. Gain the skills and confidence you need to excel in this crucial exam and secure your spot in a prestigious NYC specialized high school."
        features={shsatFeatures}
        price="150"
      />
    </div>
  );
}

function Service({ title, subtitle, features, price }) {
  return (
    <div className="md:flex justify-left items-center">
      <div className="w-full md:w-1/2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
            <div className="h-5" />
            <ul>
              {features.map((feat) => {
                return (
                  <li
                    key={feat}
                    className="py-4 flex md:py-0 md:pb-4 font-medium"
                  >
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">{feat}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <p className="text-gray-500 mb-3">${price}/month</p>
              <Link
                href="/register"
                className="mb-16 md:mb-0 inline-flex bg-gradient-to-r from-purple-500 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 duration-300"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const collegeConsultingFeatures = [
  "Unlimited essay editing",
  "Personalized feedback",
  "Personal statement",
  "Common App profile",
  "Supplements",
  "Scholarship applications",
  "Interview preparation",
];
const testPrepFeatures = [
  "Personalized feedback",
  "Reading, writing, math, science (ACT) sections",
];
const transcriptFeatures = ["Coursework, homework, test preparation"];
const shsatFeatures = ["Reading, writing, math sections"];
const tutoringFeatures = ["Reading, writing, math sections"];
