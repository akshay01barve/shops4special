import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <img
            className="object-cover object-center w-full rounded-lg shadow-xl h-96 shadow-blue-gray-900/50"
            src="./1.jpeg"
            alt="nature image"
          />
        </div>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <img
            className="object-cover object-center w-full rounded-lg shadow-xl h-96 shadow-blue-gray-900/50"
            src="./2.jpeg"
            alt="nature image"
          />
        </div>
      
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <img  className="object-cover object-center w-full rounded-lg shadow-xl h-96 shadow-blue-gray-900/50" src="./4.jpeg" alt="nature image" />
        </div>

        <div className="rounded-xl border ">
          <img src="./3.jpeg" alt="nature image" />
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
