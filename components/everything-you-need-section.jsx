"use client";

import { useState } from "react";

// Define all available images globally
const allImages = [
  {
    id: "claim-location-mobile",
    src: "/Images/Claim-Location.png",
    alt: "Claim Location Mobile App",
  },
  {
    id: "smart-dashboard",
    src: "/Images/Smart-Dashboard.png",
    alt: "Smart Dashboard",
  },
  {
    id: "compile-report",
    src: "/Images/Compile-Your-report.png",
    alt: "Compile Your Report",
  },
  { id: "reports", src: "/Images/Reports.png", alt: "Reports Section" },
  { id: "calendar", src: "/Images/Calendar.png", alt: "Calendar View" },
];

// Define tabs, linking to the central image ID
const tabs = [
  {
    id: "claim-location",
    label: "Claim Location",
    centralImageId: "claim-location-mobile",
  },
  {
    id: "smart-dashboard",
    label: "Smart Dashboard",
    centralImageId: "smart-dashboard",
  },
  {
    id: "compile-report",
    label: "Compile Your Report",
    centralImageId: "compile-report",
  },
  { id: "reports", label: "Reports", centralImageId: "reports" },
  { id: "calendar", label: "Calendar", centralImageId: "calendar" },
];

export default function EverythingYouNeedSection() {
  const [activeTab, setActiveTab] = useState("smart-dashboard");

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[1]; // Default to smart-dashboard

  // Determine the central, left, and right images
  const centralImageIndex = allImages.findIndex(
    (img) => img.id === currentTab.centralImageId
  );
  const centralImage = allImages[centralImageIndex];

  const leftImageIndex =
    (centralImageIndex - 1 + allImages.length) % allImages.length;
  const leftImage = allImages[leftImageIndex];

  const rightImageIndex = (centralImageIndex + 1) % allImages.length;
  const rightImage = allImages[rightImageIndex];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="w-full">
        {" "}
        {/* Added max-w-7xl and mx-auto for better centering */}
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
          <div className="text-center mb-8 lg:mb-12 px-4 lg:px-12">
            {" "}
            {/* Added horizontal padding */}
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
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-12">
            {" "}
            {/* Added horizontal padding */}
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

          {/* Images Slider */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center justify-center h-[500px] relative gap-7">
              {/* Left Image */}
              <div className="relative flex justify-end overflow-hidden h-full rounded-xl">
                <img
                  src={leftImage.src || "/placeholder.svg"}
                  alt={leftImage.alt}
                  className="h-full max-w-none object-contain rounded-xl transition-all duration-500 ease-in-out transform scale-75 translate-x-1/2 opacity-50"
                />
              </div>

              {/* Center Image */}
              <div className="relative flex justify-center h-full">
                <img
                  src={centralImage.src || "/placeholder.svg"}
                  alt={centralImage.alt}
                  className="h-full object-contain rounded-xl transition-all duration-500 ease-in-out"
                  style={{ width: "800px" }}
                />
              </div>

              {/* Right Image */}
              <div className="relative flex justify-start overflow-hidden h-full">
                <img
                  src={rightImage.src || "/placeholder.svg"}
                  alt={rightImage.alt}
                  className="h-full max-w-none object-contain rounded-xl transition-all duration-500 ease-in-out transform scale-75 -translate-x-1/2 opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
