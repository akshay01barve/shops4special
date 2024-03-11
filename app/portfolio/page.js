import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import { Image } from "@nextui-org/react";

const Portfolio = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className=" md:flex md:flex-row justify-between p-4">
          <div>
          <h1 className="text-center text-xl font-bold underline">SCPwD</h1>
            <Image
              className="w-[550px]"
              alt="NextUI hero Image"
              src="./1.jpeg"
            />
           
          </div>
          <div>
          <h1 className="text-center text-xl font-bold underline">INDIA 5000 BEST MSME AWARD</h1>
            <Image
              className="w-[600px]"
              alt="NextUI hero Image"
              src="./2.jpeg"
            />
          </div>
        </div>

        <div className=" md:flex md:flex-row gap-4  justify-start p-4">
          <div>
          <h1 className="text-center text-xl font-bold underline">MAYOPIA CONTROL</h1>
            <Image
              className="w-[550px]"
              alt="NextUI hero Image"
              src="./4.jpeg"
            />
          </div>
          <div className="md:ml-[150px] mt-6 md:mt-[-4px] ">
          <h1 className="text-center text-xl font-bold underline">OPTOMETRY EXPLORER</h1>
            <img src="./3.jpeg" className="h-[420px] w-[450px]  rounded-xl"/>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
