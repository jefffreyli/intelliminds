import React, { useState } from 'react';

const ServiceTabs = ({activeTab, handleTabClick}) => {
  const tabs = ['College Consulting', 'SAT & ACT Tutoring', 'Transcript & GPA', 'SHSAT (NYC Only)'];

  return (
    <div className="flex justify-center mt-8">
      <div className="rounded-xl bg-gray-200 flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => {handleTabClick}}
            className={`py-3 px-6 ${
              activeTab === index
                ? 'bg-purple-500 text-white m-[3px]'
                : 'text-gray-700'
            } rounded-xl transition-colors`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceTabs;
