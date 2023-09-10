import SectionHeader from "@/components/SectionHeader";
import {
  CancelButton,
  RadioButtons,
  SubmitButton,
  TextArea,
  TextBox,
} from "../components/FormComponents";
import { useState } from "react";
import router from 'next/router';
import { InlineWidget } from "react-calendly";

export default function register(){
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-12 xl:mx-16">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>

            <InlineWidget url="https://calendly.com/intellimindsbr/intelliminds-first-meeting" />
            

          </div>
        </div>
    </div>
  );
};
