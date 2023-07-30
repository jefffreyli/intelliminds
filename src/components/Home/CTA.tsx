import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-white h-screen">
      <div className="max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-6xl font-extrabold text-black">
          <span className="block mb-2">Boost your productivity.</span>
          <span className="block">Start using IntelliMinds today.</span>
        </h2>
        <p className="mt-10 text-lg leading-6 text-gray-500 font-medium">
          Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          Malesuada adipiscing sagittis vel nulla nec. Ac euismod vel sit
          maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
          sagittis vel nulla nec.
        </p>
        <Link href="/register">
          <button className="btn bg-orange-600 hover:bg-orange-700 text-white px-3 capitalize mt-10">
            Sign up now
          </button>
        </Link>
      </div>
    </div>
  );
}
