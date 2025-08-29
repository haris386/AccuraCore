"use client";

import Link from "next/link";

export default function ContactFooterSection() {
  const socialIcons = [
    { src: "/Icons/Facebook.svg", alt: "Facebook" },
    { src: "/Icons/Twitter.svg", alt: "Twitter" },
    { src: "/Icons/Linkdin.svg", alt: "LinkedIn" },
    { src: "/Icons/Instagram.svg", alt: "Instagram" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-pink-50 ">
      <div
        className="w-[80%] mx-auto sm:px-6 lg:px-8 relative z-10"
        style={{ top: "100px" }}
      >
        {/* === Contact Section Content (KEEPING AS IS) === */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-0">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-4xl lg:text-5xl font-400 text-gray-900">
              Contact <span className="text-orange-500 font-semibold">Us</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              We are happy to answer questions about our
              <br />
              software. Feel free to fill out this form, and we will
              <br />
              get back to you.
            </p>
            <div className="space-y-3 pt-4">
              <Link
                href="#"
                className="block text-gray-700 hover:text-orange-500 transition-colors text-lg"
              >
                Home
              </Link>
              <Link
                href="#"
                className="block text-gray-700 hover:text-orange-500 transition-colors text-lg"
              >
                Explore
              </Link>
              <Link
                href="#"
                className="block text-gray-700 hover:text-orange-500 transition-colors text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className=" bg-white rounded-3xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl lg:text-3xl text-center text-gray-900 mb-2">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Software of Interest */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Software of Interest
                </p>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCore"
                      className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">AccuraCore</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="ClaimCore"
                      className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">ClaimCore</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="software"
                      value="AccuraCam"
                      className="h-4 w-4 text-orange-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">AccuraCam</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-colors duration-300 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* === Footer Section === */}
      <footer
        className="relative z-0 py-12 lg:py-14 text-white"
        style={{ background: "linear-gradient(to right, black, #963c00)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 3 Column Layout */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-center md:text-left"
            style={{ width: "50%" }}
          >
            {/* Follow Us */}
            <div>
              <h4 className="text-gray-200 font-semibold mb-4 uppercase tracking-wide">
                Follow Us
              </h4>
              <div className="flex justify-center md:justify-start space-x-3">
                {socialIcons.map((icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="w-8 h-8 flex items-center justify-center border border-white transition-colors duration-300"
                    style={{ borderRadius: "12px" }}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-4 h-4 object-contain transition-all duration-300"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-200 font-semibold mb-4 uppercase tracking-wide">
                Contact
              </h4>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <span className="font-medium">(877) 887-7279</span>
                </p>
                <p className="text-gray-300 text-sm">
                  <a
                    href="mailto:admin@claimcore.com"
                    className="hover:text-white underline"
                  >
                    admin@claimcore.com
                  </a>
                </p>
              </div>
            </div>

            {/* Parent Company */}
            <div>
              <h4 className="text-gray-200 font-semibold mb-4 uppercase tracking-wide">
                Parent Company
              </h4>
              <a
                href="https://www.sparxtech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 text-sm hover:text-white underline"
              >
                sparxtech.com
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-y-3 gap-x-6 border-t border-gray-600 pt-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-center md:text-left">
              <span>Copyright 2012 - 2016 Avada</span>
              <span>|</span>
              <span>All Rights Reserved</span>
              <span>|</span>
              <span>Powered by WordPress</span>
              <span>|</span>
              <span>Theme Fusion</span>
            </div>
            <div className="flex gap-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookies Statement
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
