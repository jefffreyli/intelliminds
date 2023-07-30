import { ArrowSmRightIcon } from "@heroicons/react/solid";
import React from "react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <div className="col-span-1">
      <h3 className="text-xl font-semibold">{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

const GridListWithCTA = () => {
  return (
    <div className="mx-16 mb-32">
      <div className="flex justify-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-5">
            Know who your friends are at 2AM
          </h2>
          <button className="flex items-center space-x-2 text-teal-500 font-medium border border-teal-500 rounded-md p-2">
            <a
              href="https://forms.gle/sAtTLVNttV7jdC6A8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started now
            </a>
            <ArrowSmRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="w-1/2">
          <div className="space-y-4">
            <p>
              Whether you procrastinate and start your homework at 1AM or rush
              home to finish it as soon as possible, you will have access to
              online tutors 24/7.
            </p>
            <p>
              Get help with that pesky homework problem, break through an acute
              case of writer’s block, have a quick brainstorming call, or hone
              in on the perfect ending for that history essay you’re almost done
              with. We are here for you.
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-12 mb-12" />
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <Feature
          heading={"Build Relationships"}
          text={
            "We'll match you with IntelliBuddies based on your personality type- our goal is to help you enjoy learning so that it no longer feels like a chore."
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
            "You'll have access to our pool of IntelliBuddies 24/7. We'll make sure you get that essay submitted on time!"
          }
        />
        <Feature
          heading={"Flexible Schedules"}
          text={
            "Want a break from regular sessions? No worries! Just let your Intellibuddy know and you can reschedule your session for that week."
          }
        />
      </div>

    </div>
  );
};

export default GridListWithCTA;
