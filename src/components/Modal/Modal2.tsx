import React from "react";
import Button from "@/components/Button";
import { AiOutlineClose } from "react-icons/ai";

const Modal2 = () => {
  return (
    <div className="w-screen h-screen fixed inset-0 backdrop-blur-sm z-50">
      <div className="w-screen h-screen bg-gray-500 opacity-25 z-60 absolute"></div>
      <div className="w-[70vw] ml-[15vw] h-auto mt-[10vh] bg-white grid grid-cols-1 md:grid-cols-2 rounded-xl absolute pb-[2rem] z-70">
        <AiOutlineClose
          size={24}
          className="absolute top-0 right-0 mt-4 mr-4 hover:text-primary transition ease-in duration-500"
        />
        <div className="flex items-center justify-center md:mt-8 md:mr-8 mr-8 ml-8 md:ml-0">
          <img
            alt="Test Image"
            src="https://dummyimage.com/400x500/000/fff"
            className="object-contain w-[26rem] h-[40vh] md:h-[60vh]"
          ></img>
        </div>
        <div className="">
          <h2 className="flex font-bold text-3xl mt-0 md:mt-24 ml-8 md:ml-0">
            Product Name
          </h2>
          <div className="mt-4 max-w-[80%] ml-8 md:ml-0">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              facere natus vel recusandae eaque culpa officiis ducimus quod
              nobis cum, nihil repudiandae, unde eligendi tenetur blanditiis
              cumque tempore numquam laborum.
            </p>
          </div>
          <div className="mt-8 ml-8 md:ml-0">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
