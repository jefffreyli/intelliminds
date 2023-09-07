import { CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function Services() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 " />
      <div className="relative">
        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                1 on 1 College Consulting
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet
                sagittis viverra duis. In venenatis sem arcu pretium pharetra
                at. Lectus viverra dui tellus ornare pharetra.
              </p>
              <div className="h-5" />
              <ul className="grid grid-cols-2 gap-4">
                {collegeConsultingFeatures.map((feature, index) => (
                  <li
                    key={feature.feature}
                    className="py-4 flex md:py-0 md:pb-4 font-medium"
                  >
                    <CheckIcon
                      className="flex-shrink-0 h-6 w-6 text-green-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base text-gray-500">
                      {feature.feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">

                  <p className="text-gray-500">$300/month</p>
                  <p className="text-gray-400 text-xs mb-3">Reduction of $25 per month for every 3 clients referred</p>
                <Link
                  href="/register"
                  className="inline-flex bg-gradient-to-r from-yellow-600 to-orange-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 duration-300"
                >
                  Get started
                </Link>

              </div>
            </div>
          </div>
          <div className="mt-8 border-gray-200 pt-6"></div>
          <div className="w-full md:w-1/2">
            <img
              className="w-full rounded-xl"
              src="/1-on-1-consulting.jpg"
              alt="1 on 1 college consulting"
            />
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  SAT/ACT Tutoring
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="h-5" />
                <ul>
                  {testPrepFeatures.map(feature => {
                    return (
                      <li
                        key={feature.feature}
                        className="py-4 flex md:py-0 md:pb-4 font-medium"
                      >
                        <CheckIcon
                          className="flex-shrink-0 h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-500">
                          {feature.feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                <p className="text-gray-500">$200/month</p>
                  <p className="text-gray-400 text-xs mb-3">Reduction of $25 per month for every 3 clients referred</p>
                  <Link
                    href="/register"
                    className="mb-16 md:mb-0 inline-flex bg-gradient-to-r from-emerald-500 to-teal-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 duration-300"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-xl"
              src="/tutoring.jpg"
              alt="Private tutoring"
            />
          </div>
        </div>
      </div>



      <div className="mt-24 flex justify-center">
        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Transcript & GPA
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="h-5" />
                <ul>
                  {transcriptFeatures.map(feature => {
                    return (
                      <li
                        key={feature}
                        className="py-4 flex md:py-0 md:pb-4 font-medium"
                      >
                        <CheckIcon
                          className="flex-shrink-0 h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-500">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                <p className="text-gray-500 mb-3">$60/month</p>
                  <Link
                    href="/register"
                    className="mb-16 md:mb-0 inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 duration-300"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  SHSAT (NYC Only)
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="h-5" />
                <ul>
                  {shsatFeatures.map(feat => {
                    return (
                      <li
                        key={feat}
                        className="py-4 flex md:py-0 md:pb-4 font-medium"
                      >
                        <CheckIcon
                          className="flex-shrink-0 h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-500">
                          {feat}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                <p className="text-gray-500 mb-3">$150/month</p>
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


        <div className="md:flex justify-center items-center">
          <div className="w-full md:w-1/2">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  K-8th Grade
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis
                  bibendum malesuada faucibus lacinia porttitor. Pulvinar
                  laoreet sagittis viverra duis. In venenatis sem arcu pretium
                  pharetra at. Lectus viverra dui tellus ornare pharetra.
                </p>
                <div className="h-5" />
                <ul>
                  {tutoringFeatures.map(feat => {
                    return (
                      <li
                        key={feat}
                        className="py-4 flex md:py-0 md:pb-4 font-medium"
                      >
                        <CheckIcon
                          className="flex-shrink-0 h-6 w-6 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-500">
                          {feat}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                <p className="text-gray-500 mb-3">$50/month</p>
                  <Link
                    href="/register"
                    className="mb-16 md:mb-0 inline-flex bg-gradient-to-r from-gray-500 to-black bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:opacity-90 duration-300"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

const collegeConsultingFeatures = [
  {
    feature: "Unlimited essay editing",
  },
  {
    feature: "Personalized feedback",
  },
  {
    feature: "Personal statement",
  },
  {
    feature: "Common App profile",
  },
  {
    feature: "Supplements",
  },
  {
    feature: "Scholarship applications",
  },
  {
    feature: "Interview preparation",
  },
  {
    feature: "3 times a week",
  },
  {
    feature: "First 5 sessions free",
  },
];

const testPrepFeatures = [
  {
    feature: "First 3 sessions free",
  },
  {
    feature: "Personalized feedback",
  },
  {
    feature: "Reading, writing, math sections",
  },

];

const transcriptFeatures = [
  "Coursework, homework, test preparation"
];

const shsatFeatures = [
  "Reading, writing, math sections"
];

const tutoringFeatures = [
  "Reading, writing, math sections"
];