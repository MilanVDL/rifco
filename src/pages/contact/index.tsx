import ContactComponent from "@/components/Contact/ContactComponent";
import Footer from "@/components/Footer/Footer";
import ListComponent from "@/components/ListComponent";
import Navbar from "@/components/Navbar/Navbar";
import PageBanner from "@/components/PageBanner";
import React from "react";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <PageBanner />
            <ContactComponent />
            <div className="w-[50vw] ml-[10vw]">
                <ListComponent />
            </div>
            <Footer />
        </div>
    );
}

export default Contact;