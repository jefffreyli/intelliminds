export default function SectionHeader({ title, subtitle="" }) {
  return (
    <div className="bg-white">
      <div className="mx-auto pt-12 pb-6 sm:pt-20 lg:flex lg:justify-between">
        <div className="max-w-8xl">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            {title}
          </h2>
          {subtitle && <p className="mt-5 text-xl text-gray-500">{subtitle}</p>}
        </div>
      </div>
      <hr className="bg-gray-200" />
    </div>
  );
}
