"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

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

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

export default function EverythingYouNeedSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  // Scaling effect logic
  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi
      .slideNodes()
      .map((slideNode) => slideNode.querySelector("img"));
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0.7, 1).toString(); // central = 1, side = smaller
        const tweenNode = tweenNodes.current[slideIndex];
        tweenNode.style.transform = `scale(${scale})`;
        tweenNode.style.transition = "transform 0.3s ease"; // smooth
      });
    });
  }, []);

  // Keep track of current index
  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("select", onSelect);

    onSelect(emblaApi);
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor, onSelect]);

  // Handle Tab Click (jump to slide)
  const handleTabClick = (tabId) => {
    const index = allImages.findIndex((img) => img.id === tabId);
    if (emblaApi && index !== -1) {
      emblaApi.scrollTo(index);
    }
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 to-pink-50">
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
          <h2 className="text-white font-bold leading-tight text-xl lg:text-2xl">
            Everything You Need To <br /> Run And Grow Your Business
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8 lg:mb-12">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.centralImageId)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 whitespace-nowrap ${
                allImages[selectedIndex].id === tab.centralImageId
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-white hover:bg-orange-500/20"
              }`}
              style={{
                backgroundColor:
                  allImages[selectedIndex].id === tab.centralImageId
                    ? "#f97316"
                    : "#4d3b37",
                border: "1px solid gray",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Embla Carousel */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {allImages.map((img) => (
              <div
                className="embla__slide flex-[0_0_55%] flex justify-center items-center px-2"
                key={img.id}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-[500px] object-contain rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
