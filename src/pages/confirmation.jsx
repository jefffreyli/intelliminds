import Link from "next/link";

export default function confirmation() {
  return (
    <>
      <div className="h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="text-center">
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900  sm:text-5xl">
                Thanks for registering for Intelliminds!
              </h1>
              <p className="mt-4 text-base text-gray-500">
                A copy of your responses has been sent to your email for your
                own record.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <div className="text-base font-medium text-orange-600 hover:text-orange-500 hover:cursor-pointer">
                    Go back home
                    <span aria-hidden="true"> &rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
