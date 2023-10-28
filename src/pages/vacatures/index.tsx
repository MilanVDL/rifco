import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import React from "react";
import TextImage from "../../../public/Vacature_foto.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

//Language
import nl from "../../components/PageLanguages/vacatures/nl";
import en from "../../components/PageLanguages/vacatures/en";

const Vacatures = () => {
  //Language Stuff :
  const router = useRouter();
  const { locale } = router;
  const t = locale === "nl" ? nl : en;

  return (
    <div>
      <Navbar />
      <PageBanner />
      <div className="h-[80vh] w-[80vw] ml-[10vw] flex md:flex-row flex-col md:mt-12 mt-10 mb-32 md:mb-0">
        <div className="md:w-[40vw] w-[80vw] bg-green md:mt-20">
          <h1 className="font-titleFont text-4xl font-bold">{t.title}</h1>
          <div className="font-bodyFont text-base mt-8">
            <p>{t.p1}</p>
            <p className="mt-4 italic font-extrabold">{t.p2}</p>
            <p className="mt-4">
              {t.p3}{" "}
              <a
                className="italic font-bold text-blue-500"
                href="mailto:info@rifco.nl"
              >
                info@rifco.nl
              </a>
            </p>
            <p className="mt-4">{t.p4}</p>
          </div>
        </div>
        <div className="md:w-[30vw] ml-2 mt-20 md:mt-0 md:ml-32">
          <Image
            width={600}
            height={600}
            alt="test"
            src={TextImage}
            className="w-full max-h-[30vw] object-cover rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vacatures;
