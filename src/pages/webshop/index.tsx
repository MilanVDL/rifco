import Footer from "@/components/Footer/Footer";
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
            <Footer />
        </>
    );
}

export default Webshop;