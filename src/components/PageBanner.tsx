import Image from "next/image";
import React from "react";
import BannerImage from "../../public/rifco_banner_image.jpg";

const PageBanner = () => {
    return (
        <div className="w-full h-[20vh] border-black border-b-2">
            <Image 
            src={BannerImage}
            alt="Banner Image"
            width={1920}
            height={1080}
            className="object-none w-full h-full"
            />
        </div>
    );
}

export default PageBanner;