import Footer from "@/components/Footer/Footer";
import Modal2 from "@/components/Modal/Modal2";
import Navbar from "@/components/Navbar/Navbar";
import PageBanner from "@/components/PageBanner";
import WebshopPage from "@/components/WebshopPage/WebshopPage";
import React from "react";

const Webshop = () => {
  return (
    <>
      <Navbar />
      <PageBanner />
      <WebshopPage />
      <Modal2 />
      <Footer />
    </>
  );
};

export default Webshop;
