"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "claim-location",
    label: "Claim Location",
    images: [
      { src: "/claim-location.png", alt: "Claim Location Mobile App" },
      { src: "/smart-dashboard.png", alt: "Smart Dashboard" },
      { src: "/compile-your-report.png", alt: "Compile Your Report" },
    ],
  },
  {
    id: "smart-dashboard",
    label: "Smart Dashboard",
    images: [
      { src: "/claim-location.png", alt: "Claim Location Mobile App" },
      { src: "/smart-dashboard.png", alt: "Smart Dashboard" },
      { src: "/compile-your-report.png", alt: "Compile Your Report" },
    ],
  },
  {
    id: "compile-report",
    label: "Compile Your Report",
    images: [
      { src: "/claim-location.png", alt: "Claim Location Mobile App" },
      { src: "/smart-dashboard.png", alt: "Smart Dashboard" },
      { src: "/compile-your-report.png", alt: "Compile Your Report" },
    ],
  },
  {
    id: "contact-profiles",
    label: "Contact Profiles",
    images: [
      { src: "/claim-location.png", alt: "Claim Location Mobile App" },
      { src: "/smart-dashboard.png", alt: "Smart Dashboard" },
      { src: "/compile-your-report.png", alt: "Compile Your Report" },
    ],
  },
  {
    id: "calendar",
    label: "Calendar",
    images: [
      { src: "/claim-location.png", alt: "Claim Location Mobile App" },
      { src: "/smart-dashboard.png", alt: "Smart Dashboard" },
      { src: "/compile-your-report.png", alt: "Compile Your Report" },
    ],
  },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("smart-dashboard");

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[1];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="w-[100%]">
        <div
          className="p-8 lg:p-12"
          style={{
            backgroundColor: "#1f0800",
            borderRadius: "65px",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-12">
            <h2
              className="text-white font-bold leading-tight"
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.75rem",
              }}
            >
              Everything You Need To
              <br />
              Run And Grow Your Business
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-white hover:bg-orange-500/20"
                }`}
                style={{
                  backgroundColor: activeTab === tab.id ? "#f97316" : "#4d3b37",
                  border: "1px solid gray",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Images */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-4">
            {/* Left Image - Smaller */}
            <div className="relative flex-shrink-0 order-1 lg:order-1">
              <div className="rounded-2xl">
                <img
                  src={currentTab.images[0]?.src || "/placeholder.svg"}
                  alt={currentTab.images[0]?.alt || "Left Image"}
                  width={200}
                  height={300}
                  className="w-full h-auto rounded-xl max-w-[200px]"
                />
              </div>
            </div>

            {/* Center Image - Larger (800px) */}
            <div className="relative flex-shrink-0 order-2 lg:order-2">
              <div className="rounded-2xl">
                <img
                  src={currentTab.images[1]?.src || "/placeholder.svg"}
                  alt={currentTab.images[1]?.alt || "Center Image"}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl max-w-[800px]"
                />
              </div>
            </div>

            {/* Right Image - Smaller */}
            <div className="relative flex-shrink-0 order-3 lg:order-3">
              <div className="rounded-2xl">
                <img
                  src={currentTab.images[2]?.src || "/placeholder.svg"}
                  alt={currentTab.images[2]?.alt || "Right Image"}
                  width={200}
                  height={300}
                  className="w-full h-auto rounded-xl max-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
