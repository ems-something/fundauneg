import React from "react";

import { aboutUsData as aboutUs } from "@/app/data/about-usData";

const AboutUs = () => {
  return (
    <section
      id="about-us_section"
      className=" text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 sm:py-24 mx-auto">
        <div className="flex justify-center mb-20">
          <h2 className="sm:w-2/5 mb-4 text-3xl text-center text-white font-medium title-font">
            Nosotros
          </h2>
        </div>
        {aboutUs.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div
                className={`flex items-center sm:items-start mx-auto gap-10 ${
                  index + 1 < aboutUs.length
                    ? "border-b pb-10 mb-10 border-gray-800"
                    : ""
                } sm:flex-row flex-col`}
                key={index}
              >
                <div className="sm:w-1/2 sm:h-96 h-80 w-80 sm:mr-10 inline-xflex items-center justify-center shrink-0">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full rounded-lg"
                    src={item.imgUrl}
                  />
                </div>
                <div className="grow text-center mt-6 sm:mt-0">
                  <h2 className="text-white sm:text-left text-2xl title-font font-medium mb-8">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed text-base text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          } else {
            if (index % 2 !== 0) {
              return (
                <div
                  className={`flex items-center sm:items-start mx-auto gap-10 ${
                    index + 1 < aboutUs.length
                      ? "border-b pb-10 mb-10 border-gray-800"
                      : ""
                  } sm:flex-row flex-col`}
                  key={index}
                >
                  <div className="grow text-center mt-6 sm:mt-0">
                    <h2 className="text-white sm:text-left text-2xl title-font font-medium mb-8">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed text-base text-justify">
                      {item.description}
                    </p>
                  </div>
                  <div className="sm:w-1/2 sm:h-96 h-80 w-80 order-first sm:order-none sm:ml-10 inline-flex items-center justify-center shrink-0">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full rounded-lg"
                      src={item.imgUrl}
                    />
                  </div>
                </div>
              );
            }
          }
        })}
      </div>
    </section>
  );
};

export default AboutUs;
