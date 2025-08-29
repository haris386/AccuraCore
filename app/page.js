"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WhatIsSection from "@/components/what-is-section";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import TheToolsSection from "@/components/the-tools-section";
import PowerfulFeaturesSection from "@/components/powerful-features-section";
import ContactFooterSection from "@/components/contact-footer-section";

export default function LandingPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="min-h-screen bg-black text-white relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/Images/Hero-Image.png')`,
        }}
      >
        {/* Navigation Header */}
        <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center justify-between max-w-[100%] bg-[#333534] backdrop-blur-sm rounded-2xl px-6 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/Logos/Claimcore/Mask-group.png"
                alt="ClaimCore"
                width={140}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <span
                onClick={() => handleScroll("home")}
                className="text-white hover:text-orange-400 transition-colors cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                Home
              </span>
              <span
                onClick={() => handleScroll("explore")}
                className="text-white hover:text-orange-400 transition-colors cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                Explore
              </span>
              <span
                onClick={() => handleScroll("contact")}
                className="text-white hover:text-orange-400 transition-colors cursor-pointer"
                style={{ fontSize: "14px" }}
              >
                Contact
              </span>
            </div>

            {/* Book A Chat Button */}
            <Button
           onClick={() => setIsChatOpen(true)}
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 border-white font-medium px-4 py-2 text-sm rounded-lg"
            >
              Book A Chat
            </Button>
          </nav>
        </header>

        {/* Hero Content */}
        <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 pb-30 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-4">
                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                    style={{ fontSize: "50px", fontWeight: 300 }}
                  >
                    <span
                      className="text-orange-500"
                      style={{ fontWeight: 600 }}
                    >
                      All-in-One
                    </span>
                    <br />
                    <span className="text-white">Claims Solution</span>
                  </h1>

                  <p
                    className="text-lg sm:text-xl text-gray-300 max-w-lg"
                    style={{ fontSize: "18px" }}
                  >
                    Everything You Need For Claims In
                    <br />
                    One Powerful App
                  </p>
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {[
                    "30% less time per claim.",
                    "Label your photos as you take them.",
                    "Guided reporting simplifies writing.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                      <span
                        className="text-white text-base sm:text-lg"
                        style={{ fontSize: "15px" }}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button
                    onClick={() => handleScroll("explore")}
                    className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-3 text-base rounded-md"
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-20">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 flex justify-around">
            <span
              onClick={() => handleScroll("home")}
              className="text-white hover:text-orange-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Home
            </span>
            <span
              onClick={() => handleScroll("explore")}
              className="text-white hover:text-orange-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Explore
            </span>
            <span
              onClick={() => handleScroll("contact")}
              className="text-white hover:text-orange-400 transition-colors text-sm font-medium cursor-pointer"
            >
              Contact
            </span>
          </div>
        </div>
      </div>

      {/* What Is Section */}

      <WhatIsSection />

      {/* Everything You Need Section */}
      <EverythingYouNeedSection />

      {/* The Tools Section */}
      <div id="explore">
        <TheToolsSection />
      </div>

      {/* Powerful Features Section */}
      <PowerfulFeaturesSection />

      {/* Contact Section */}
      <div id="contact">
        <ContactFooterSection />
      </div>

            {isChatOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl w-[90%] max-w-[600px] max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h3 className="text-2xl text-center text-gray-900 mb-2">
              Registration Form
            </h3>
            <p className="text-gray-500 text-sm mb-6 text-center">
              Please fill out this form with the required information
            </p>

            <form
              action="https://formspree.io/f/mnnbqejn"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Software of Interest */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Software of Interest
                </p>
                <div className="space-y-2">
                  {["AccuraCore", "ClaimCore", "AccuraCam"].map((s) => (
                    <label key={s} className="flex items-center">
                      <input
                        type="checkbox"
                        name="software"
                        value={s}
                        className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-gray-700">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
