import { useRouter } from "next/router";
import React from "react";

//Languages :
import nl from "./Languages/nl";
import en from "./Languages/en";

const LanguageSelector = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "nl" ? nl : en;

  const changeLanguage = (e: { target: { value: any } }) => {
    const locale = e.target.value;
    router.push(router.pathname, router.pathname, { locale });
  };

  return (
    <div className="ml-5">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-400 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary md:block md:w-full p-2.5"
        onChange={changeLanguage}
        defaultValue={locale}
      >
        <option value="nl">NL</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
