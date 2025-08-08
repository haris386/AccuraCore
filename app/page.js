import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatIsSection from "@/components/what-is-section";
import EverythingYouNeedSection from "@/components/everything-you-need-section";
import TheToolsSection from "@/components/the-tools-section";
import PowerfulFeaturesSection from "@/components/powerful-features-section";
import ContactFooterSection from "@/components/contact-footer-section";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background texture/pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Navigation Header */}
        <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center justify-between max-w-[100%] bg-[#333534] backdrop-blur-sm rounded-2xl px-6 py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/claimcore-logo.png"
                alt="ClaimCore"
                width={140}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                Explore
              </Link>
              <Link
                href="#"
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Book A Chat Button */}
            <Button
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
                  <Button className="bg-white text-black hover:bg-gray-100 font-medium px-6 py-3 text-base rounded-md">
                    Explore More
                  </Button>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  <Image
                    src="/right-img"
                    alt="No assets provided for assessment"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-20">
          <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 flex justify-around">
            <Link
              href="#"
              className="text-white hover:text-orange-400 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-400 transition-colors text-sm font-medium"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-400 transition-colors text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* What Is Section */}
      <WhatIsSection />

      {/* Everything You Need Section */}
      <EverythingYouNeedSection />

      {/* The Tools Section */}
      <TheToolsSection />

      {/* Powerful Features Section */}
      <PowerfulFeaturesSection />

      {/* Contact Us and Footer Section */}
      <ContactFooterSection />
    </>
  );
}
