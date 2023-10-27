import Image from "next/image";
import React from "react";
import HeroImage from "../../../public/hero.jpg";
import { useRouter } from "next/router";

//Language
import nl from "./Languages/nl";
import en from "./Languages/en";
import Link from "next/link";

const Hero = () => {
  //Language Stuff :
  const router = useRouter();
  const { locale } = router;
  const t = locale === "nl" ? nl : en;

  return (
    <section id="home" className="py-8 pt-0 ">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-16 md:flex-row border-b-2 border-gray-300 md:pb-8 w-[80vw] ml-[10vw] md:w-auto md:mx-auto">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1
            className="max-w-2xl text-[2.9rem] leading-none text-gray-900 font-extrabold font-sans text-center lg:text-5xl
                    lg:text-left lg:leading-tight mb-5 font-titleFont"
          >
            {t.heroTitle}
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-xl font-bodyFont">
            {t.heroSubTitle}
          </p>
          <div className="flex justify-center mt-14 lg:justify-start font-bodyFont">
            <Link href="/about">
            <button
              type="button"
              className="text-white bg-primary font-semibold rounded-lg px-5 py-4 text-center
                        hover:bg-indigo-500 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              {t.heroButton1}
            </button>
            </Link>
            <Link href="contact">
            <button
              type="button"
              className="ml-4 text-gray-900 bg-gray-300 font-semibold rounded-lg px-5 py-4 text-center
                        hover:bg-gray-400 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              {t.heroButton2}
            </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={600}
            height={700}
            className="ml-auto rounded-3xl hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
