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
        className="md:w-[80vw] w-[95vw] md:ml-[10vw] ml-[2.5vw] bg-primary rounded-xl !p-[1em] md:p-[3em]"
      >
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 4" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 5" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 6" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 7" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 8" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://dummyimage.com/300x200/000/fff" alt="Image 9" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default LogoSlider;
