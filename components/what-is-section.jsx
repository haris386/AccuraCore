"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Zap, Users, Puzzle } from "lucide-react";

const features = [
  {
    id: "efficiency",
    icon: Zap,
    title: "Efficiency",
    description:
      "30% less time per claim resolution achieved with improved accuracy",
  },
  {
    id: "organization",
    icon: Users,
    title: "Organization",
    description: "Label your photos as you take them instantly and accurately",
  },
  {
    id: "integration",
    icon: Puzzle,
    title: "Integration",
    description:
      "Guided reporting makes the writing process swift and painless.",
  },
];

export default function WhatIsSection() {
  const [activeFeature, setActiveFeature] = useState("organization");

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
<div className="grid md:grid-cols-2 gap-10 items-center" style={{width:"85%"}}>
      {/* Image Block */}
      <div className="border border-gray-400 rounded-2xl" style={{ width: "fit-content" }}>
        <img
          src="/what-is-claimcore-image.png"
          alt="Team"
          className="rounded-2xl object-contain w-full h-[500px]"
          loading="lazy"
          decoding="async"
          style={{ color: "transparent" }}
        />
      </div>

      {/* Text Block */}
      <div className="space-y-4">
        <h2 className="text-4xl font-normal text-gray-900 leading-snug">
          What Is <span className="text-orange-500 font-semibold">ClaimCore</span><span className="text-orange-500"> ?</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          ClaimCore is a CRM system with tools for tracking, issuing,
          performing, and documenting inspections. It has all the tools
          necessary for scheduling inspections, navigation, photo capturing
          and labeling, report writing and revision, while keeping your
          client informed along the entire process.
        </p>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
          {features.map((feature) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                className={`cursor-pointer text-center pb-4 border-b-2 transition-all duration-300 ${
                  isActive
                    ? "border-orange-500 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-80"
                }`}
              >
                <div
                  className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full mb-3 transition-colors ${
                    isActive
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  <Icon size={24} />
                </div>
                <h3
                  className={`font-medium text-base ${
                    isActive ? "text-gray-900" : "text-gray-600"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    isActive ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
        {/* What We Do + Cards in a 2-column row */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column - What We Do */}
          <div>
           <h3 className="text-3xl font-normal text-gray-900 mb-4">
          What <span className="text-orange-500 font-semibold">We Do</span>
        </h3>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              ClaimCore is a simple CRM built with the adjuster in mind. Whether
              you’re an individual or part of a team, we have a setup for you.
              With the tools we provide, you can use the same methods of
              insurance companies to argue your case and justify your claims.
            </p>
          </div>

          {/* Right Column - Cards side-by-side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Company Card */}
  <div className="bg-white rounded-2xl p-6 lg:p-8">
    <h4 className="text-xl mb-3 text-orange-500">
      <span className="font-bold">ClaimCore</span>
      <br />
      <span className="font-normal text-gray-900">For Companies:</span>
    </h4>
    <p className="text-sm text-gray-800 leading-relaxed mb-2">
      Take it a step with simple UI tools, and team deeper access down
      to inspector or team leader.
    </p>
    <p className="text-sm text-gray-800 leading-relaxed mb-2">
      You can assign claims and have them added directly to your
      system. Claim tagging helps the lead adjuster own the claim and
      helps manage communication through the team.
    </p>
    <p className="text-sm text-gray-800 leading-relaxed">
      Everything is logged for you as you run it.
    </p>
  </div>

  {/* Individual Card */}
  <div className="bg-white rounded-2xl p-6 lg:p-8">
    <h4 className="text-xl mb-3 text-orange-500">
      <span className="font-bold">ClaimCore</span>
      <br />
      <span className="font-normal text-gray-900">For Individuals:</span>
    </h4>
    <p className="text-sm text-gray-800 leading-relaxed mb-2">
      You can start with any info you need and build your case where
      you left off in your preparation.
    </p>
    <p className="text-sm text-gray-800 leading-relaxed">
      Designed to help you create accurate reports, organize photos
      for easy lookup, and simplify communication with your customers.
    </p>
  </div>
</div>

        </div>

        {/* Scroll Arrow
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToBottom}
            className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition duration-300 shadow-md"
            aria-label="Scroll to bottom"
          >
            <ChevronDown size={24} />
          </button>
        </div> */}
      </div>
    </section>
  );
}
