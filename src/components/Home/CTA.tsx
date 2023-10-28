import Link from "next/link"

export default function CTA() {
   return (
     <div className="mx-6 md:mx-10 lg:mx-16 mx-auto py-24 px-5 md:px-0">
       <div className="text-center py-16 px-6 sm:py-20 sm:px-8 lg:px-10 bg-gradient-to-br from-primary to-purple-500 rounded-2xl">
         <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white sm:text-4xl my-10">
           <span className="block mb-2">Boost your outcomes.</span>
           <span className="block">Start using Intelliminds today.</span>
         </h2>
         {/* <p className="my-5 text-lg leading-6 text-white">
          Say goodbye to boring, generic email templates
         </p> */}
         <Link
           href="/register"
           className="my-5 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
         >
           Book a free consultation
         </Link>
       </div>
     </div>
   )
 }
 