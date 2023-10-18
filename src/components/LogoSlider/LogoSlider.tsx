import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
import { freemem } from "os";
import { lookup } from "dns";
import Image from "next/image";

const LogoSlider = () => {
  return (
    <div className="w-[100%]">
      <div className="mx-auto mb-8 max-w-[510px] text-center lg:mb-8">
        <span className="block mb-2 text-lg font-semibold text-primary italic">
          When Quality Matters
        </span>
        <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
          Onze Klanten
        </h2>
        <p className="text-base text-body-color">
          De klanten hieronder geloven al jaren lang in onze kwaliteit
        </p>
      </div>
      <Splide
        aria-label="Partner Carousel"
        options={{
          type: "loop",
          gap: "1rem",
          drag: "free",
          perPage: 4,
          arrows: false,
          pagination: false,
          autoWidth: true,
          snap: false,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.7,
          },
        }}
        extensions={{ AutoScroll }}
        className="md:w-[80vw] w-[95vw] md:ml-[10vw] ml-[2.5vw] bg-white !p-[1em] md:p-[3em] border-t-[1px] border-b-[1px] border-primary"
      >
        <SplideSlide>
          <Image
            src="/logos/Rabobank-Logo.png"
            width={200}
            height={300}
            alt="Rabobank Logo"
            className="object-cover h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Salute-Logo.jpg"
            width={200}
            height={300}
            alt="Salute Inc"
            className="object-cover h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Colruyt-Logo.svg"
            width={200}
            height={300}
            alt="Salute Inc"
            className="object-cover h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Alteco-Logo.webp"
            width={200}
            height={300}
            alt="Alteco"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Edgeconnex-Logo.png"
            width={200}
            height={300}
            alt="Edgeconnex"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/NorthC-Logo.png"
            width={200}
            height={300}
            alt="NorthC"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/DcConnect-Logo.png"
            width={200}
            height={300}
            alt="Dc Connect"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Verizon-Logo.png"
            width={200}
            height={300}
            alt="Verizon"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/BCEI-Logo.gif"
            width={200}
            height={300}
            alt="BCEI International"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/CSU-Logo.svg"
            width={200}
            height={300}
            alt="CSU"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Booking-Logo.png"
            width={200}
            height={300}
            alt="Booking.com"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/Logos/Europol-Logo.png"
            width={200}
            height={300}
            alt="Europol"
            className="object-contain h-[200px] w-[300px]"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default LogoSlider;
