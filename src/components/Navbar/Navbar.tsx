import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/rifco_logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "../Button";
import LanguageSelector from "./LanguageSelector";
import { useRouter } from "next/router";

//Icons
import {IoMdMenu, IoMdClose} from "react-icons/io"

//Language
import nl from "./Languages/nl";
import en from "./Languages/en";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    //Language Stuff : 
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'nl' ? nl : en;


  return (
    <nav className="bg-white border-gray-300 border-b-2 relative z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:p-0 md:w-auto w-full flex justify-between">
          <Image
            width={290}
            height={114}
            alt="Rifco Logo"
            src={Logo}
            className="md:cursor-pointer h-32 md:object-cover object-none object-center"
          />
          <div className="text-3xl md:hidden mt-4" onClick={() => setOpenNav(!openNav)}>
                { !openNav ? <IoMdMenu /> : <IoMdClose /> }
          </div>
        </div>
        <ul className="md:flex hidden uppercase font-titleFont font-semibold itemcs-center gap-8">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/webshop" className="py-7 px-3 inline-block">
              Webshop
            </Link>
          </li>
          <li>
            <Link href="/about" className="py-7 px-3 inline-block">
              {t.about}
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:flex hidden">
          <Button />
          <LanguageSelector />
        </div>

        {/* Mobile Navigation */}
        <ul className={`
        md:hidden bg-gray-200 absolute w-full top-0 h-fit bottom-0 pt-24 pb-4 pl-4 duration-500 rounded-b-3xl ${openNav ? 'left-0' : 'left-[-100%]'}
        `}>
          <li>
            <Link href="/" className="py-7 px-3 inline-block mt-8 md:mt-0">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 flex justify-end mr-8">
            <Button />
            <LanguageSelector />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
