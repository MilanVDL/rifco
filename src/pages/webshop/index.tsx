import Footer from "@/components/Footer/Footer";
import Modal2 from "@/components/Modal/Modal";
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
      <div id="modal-root"></div>
      {/* <Modal2 /> */}
      <Footer />
    </>
  );
};

export default Webshop;
