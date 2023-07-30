export default function CollegeLogoCloud() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto my-auto mb-12 lg:mb-40 -mt-16">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          College consulting from the very best
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">
          {colleges.map(college => {
            return (
              <div
                key={college.name}
                className="col-span-1 flex justify-center py-8 px-8 bg-gray-50"
              >
                <img
                  className="max-h-12"
                  src={college.logoSrc}
                  alt={college.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const colleges = [
  {
    logoSrc: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    name: "Massachusetts Institute of Technology (MIT)",
  },
  {
    logoSrc: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    name: "Cornell University",
  },
  {
    logoSrc: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    name: "Carnegie Mellon University (CMU)",
  },
  {
    logoSrc: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    name: "New York University (NYU)",
  },
];
