import SectionHeader from "@/components/SectionHeader";
import {
  CancelButton,
  RadioButtons,
  SubmitButton,
  TextArea,
  TextBox,
} from "../components/FormComponents";
import { useState } from "react";

export default function register(){
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");
  const [service, setService] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    let data = {
      fullName,
      emailAddress,
      currentGrade,
      service,
      hearAboutUs,
    };

    fetch("/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(res => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });
  };

  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-12 xl:mx-16">
      <SectionHeader title="Schedule Your First Session With Intelliminds" />

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
          router.push("/confirmation");
        }}
        className="space-y-8 divide-y divide-gray-200 mx-auto"
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div className="mt-6 space-y-6">
              <TextBox
                question="Full name"
                type="text"
                placeholder="First Last"
                id="full-name"
                setValue={setFullName}
                borderTop={false}
              />
              <TextBox
                question="Email address"
                type="email"
                placeholder="example@example.com"
                id="email-address"
                setValue={setEmailAddress}
              />

              <RadioButtons
                question={"Current grade"}
                id="current-grade"
                setValue={setCurrentGrade}
                options={[
                  {
                    value: "9th",
                  },
                  {
                    value: "10th",
                  },
                  {
                    value: "11th",
                  },
                  {
                    value: "12th",
                  },
                ]}
              />

              <RadioButtons
                question={"What would you like help with?"}
                id="service"
                setValue={setService}
                options={[
                  {
                    value: "College Consulting",
                  },
                  {
                    value: "SAT Tutoring",
                  },
                  {
                    value: "ACT Tutoring",
                  },
                ]}
              />

              <TextArea
                question="How did you hear about us?"
                type="text"
                rows={7}
                id="hear-about-us"
                setValue={setHearAboutUs}
              />
            </div>
          </div>

          <div className="py-10">
            <div className="flex justify-end">
              <CancelButton />
              <SubmitButton />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
