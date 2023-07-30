export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-12 pb-6 px-4 sm:pt-20 sm:pb-10 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 text-xl text-gray-500">{subtitle}</p>
        </div>
      </div>
      <hr className="bg-gray-200 mx-24" />
    </div>
  );
}
