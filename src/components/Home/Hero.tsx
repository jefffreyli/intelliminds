import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-wrap sm:flex-nowrap justify-center items-center mx-6 sm:mx-10 md:mx-16 gap-x-16 h-screen md:-mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="md:w-1/2 w-full">
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          On Demand Tutoring
        </motion.h1>
        <motion.h1
          className="font-bold text-4xl md:text-6xl text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          and Consulting at Affordable Prices
        </motion.h1>
        <div className="h-10" />
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-500"
        >
          On demand tutoring and consulting offers instant access to experienced educators and advisors, catering to your specific learning or problem-solving needs. Get the expertise you require, precisely when you need it, with our convenient and flexible platform.
        </motion.p>

        <div className="h-10" />
        <motion.div
          className="flex justify-left gap-x-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <Link href="/services">
            <button className="btn btn-neutral capitalize px-3">
              Learn more
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="md:w-1/2 w-full "
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1, type: "spring" }}
      >
        <img src="/cta_main.jpg" alt="Hero Image" />
      </motion.div>
    </motion.div>
  );
}
