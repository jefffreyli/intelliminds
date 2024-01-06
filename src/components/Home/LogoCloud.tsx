import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="mx-6 sm:mx-10 md:mx-16 mb-12 md:mb-40 md:-mt-20">
      <div className="md:max-w-7xl md:mx-auto ">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Consulting from the very best
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {logos.map((logo) => {
            return (
              <div
                key={logo.name}
                className="col-span-1 flex justify-center py-8 px-8"
              >
                <Image
                  className={`hover:brightness-[1.2] duration-500 ${logo.size}`}
                  src={logo.src}
                  alt={logo.name}
                  height={100}
                  width={135}
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
    size: "md:h-20 scale-[0.85] md:scale-[0.95]",
  },
  {
    name: "University of Pennsylvania",
    src: "/colleges/upenn-logo.png",
    size: "md:h-20 scale-[1.3] md:scale-[1.5]",
  },
  {
    name: "Brown University",
    src: "/colleges/brown-logo.png",
    size: "md:h-20 brightness-[1.2] hover:brightness-[1.5] scale-[1.2] md:scale-[1.4]",
  },
  {
    name: "Cornell University",
    src: "/colleges/cornell-logo.png",
    size: "md:h-20 scale-[1.2] md:scale-[1.4]",
  },
  {
    name: "New York University",
    src: "/colleges/nyu-logo.png",
    size: "md:h-20 brightness-[1.2] hover:brightness-[1.5] scale-[1.2] md:scale-[1.4]",
  },
  {
    name: "Carnegie Mellon University",
    src: "/colleges/cmu-logo.svg",
    size: "md:h-20 scale-[1] md:scale-[1.2]",
  },
];
