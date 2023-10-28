import { ArrowSmRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <div className="col-span-1">
      <h3 className="text-xl font-semibold text-black">{heading}</h3>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

const GridListWithCTA = () => {
  return (
    <div className="mx-6 sm:mx-10 md:mx-16 mb-40">
      <div className="flex justify-left">
        <h2 className="relative text-6xl font-bold mb-10 text-purple-600">
          What We Do
          <span className="absolute top-0 right-0 text-3xl text-purple-600 transform translate-x-10 translate-y-1">
            ✨
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-12">
        <Feature
          heading={"Build Relationships"}
          text={
            "We'll match you with experienced tutors from your dream school. Our goal is to help you enjoy learning so that it no longer feels like a chore."
          }
        />
        <Feature
          heading={"Advice from Upperclassmen"}
          text={
            "Struggling with managing time or stressing over college? We've been through it too and can offer valuable guidance to help you succeed."
          }
        />
        <Feature
          heading={"On Demand Support"}
          text={
            "You'll have access to our pool of tutors 24/7. We'll make sure you get that essay submitted on time!"
          }
        />
        <Feature
          heading={"Flexible Schedules"}
          text={
            "Want a break from regular sessions? No worries! Just let your tutor know and you can reschedule your session for that week."
          }
        />
      </div>
    </div>
  );
};

export default GridListWithCTA;
