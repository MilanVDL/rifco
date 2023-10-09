import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const WebshopPage = () => {

  return (
    <>
      <div className="w-full">
        <h1 className="font-titleFont font-bold text-3xl content-center align-middle text-center w-full pt-8 pb-4">
          Webshop
        </h1>
        <p className="font-bodyFont content-center align-middle text-center w-full pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore
          esse, blanditiis tempore rerum maiores.
        </p>
      </div>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="w-[80%] h-auto grid md:grid-cols-4 sm:grid-cols-2 content-center">
          <ProductCard title="test1"/>
          <ProductCard title="test2"/>
          <ProductCard title="test3"/>
          <ProductCard title="test4"/>
          <ProductCard title="test5"/>
        </div>
      </div>
    </>
  );
};

export default WebshopPage;
