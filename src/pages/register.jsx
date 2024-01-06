import SectionHeader from "@/components/SectionHeader";
import {
  CancelButton,
  RadioButtons,
  SubmitButton,
  TextArea,
  TextBox,
} from "../components/FormComponents";
import { useState } from "react";
import router from "next/router";
import { InlineWidget } from "react-calendly";

export default function register() {
  return (
    <div className="h-screen bg-white">
      <meta
      name="description"
      content="nyc college consulting, common app, scholarships, college essays, sat act tutoring, tutoring, SAT, ACT, transcript, GPA, grades, SHSAT, high school admissions, homework help, book a time slot, reservation, cheap, registration, meeting, free first meeting"
      />

      <div className="divide-y divide-gray-200">
        <div>
          <InlineWidget url="https://calendly.com/intellimindsbr/intelliminds-first-meeting" />
        </div>
      </div>
    </div>
  );
}
