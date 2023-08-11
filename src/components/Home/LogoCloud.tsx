export default function LogoCloud() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Consulting from the very best
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {logos.map(logo => {
            return (
              <div className="col-span-1 flex justify-center py-8 px-8">
                <img
                  className={`hover:brightness-[1.2] duration-500 ${logo.size}`}
                  src={logo.src}
                  alt={logo.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const logos = [
  {
    name: "Massachusetts Institute of Technology",
    src: "/colleges/mit-logo.svg",
    size: "h-20 scale-[0.95]",
  },
  {
    name: "University of Pennsylvania",
    src: "/colleges/upenn-logo.png",
    size: "h-20 scale-[1.4]",
  },
  {
    name: "Cornell University",
    src: "/colleges/cornell-logo.svg",
    size: "h-20 scale-125",
  },
  {
    name: "New York University",
    src: "/colleges/nyu-logo.png",
    size: "h-20 brightness-[1.2] hover:brightness-[1.3] scale-[2]",
  },
  {
    name: "Carnegie Mellon University",
    src: "/colleges/cmu-logo.svg",
    size: "h-20 scale-[1.2]",
  },
];
