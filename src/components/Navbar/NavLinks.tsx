import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

// Icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// Language
import nl from "./Languages/nl";
import en from "./Languages/en";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const router = useRouter();
  const { locale } = router;
  const t = locale === "nl" ? nl : en;

  const links = [
    {
      name: t.nav1,
      submenu: true,
      sublinks: [
        {
          Head: t.head1,
          sublink: [
            { name: t.head1sub1, link: "/importance" },
            { name: t.head1sub2, link: "/cleaning" },
            { name: t.head1sub3, link: "/program" },
          ],
        },
        {
          Head: t.head2,
          sublink: [
            { name: t.head2sub1, link: "/coating" },
            { name: t.head2sub2, link: "/esd" },
          ],
        },
        {
          Head: t.head3,
          sublink: [
            { name: t.head3sub1, link: "/dust" },
            { name: t.head3sub2, link: "/esdmeasurement" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 inline md:hidden">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 md:border-t-2 md:border-l-2 md:border-gray-400"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-1 gap-10 md:border-2 md:border-gray-400 w-fit">
                    {link.sublinks.map((mysublinks) => (
                      <div key={mysublinks.Head}>
                        <h1 className="text-md font-bold">{mysublinks.Head}</h1>
                        {mysublinks.sublink.map((slink) => (
                          <li
                            key={slink.name}
                            className="text-sm text-gray-600 my-2.5"
                          >
                            <Link
                              href={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile Menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li key={slink.link} className="py-3 pl-14">
                        <Link href={slink.link} className="hover:text-primary">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
