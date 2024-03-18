import React from "react";

import { testimonialsData as testimnials } from "@/app/data/testimonialsData";

function Testimonial() {
  return (
    <section
      id="testimonials_section"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-16 mx-auto">
        <div className="flex justify-center mb-20">
          <h2 className="sm:w-2/5 mt-5 mb-4 text-3xl text-center text-white font-medium title-font">
            Opiniones
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimnials.map((item, index) => (
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={index}>
              <div className="h-full text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-500 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed sm:text-justify text-center">
                  {item.testimnial}
                </p>
                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                <h3 className="text-white font-medium title-font tracking-wider text-sm">
                  {item.author}
                </h3>
                <p className="text-gray-500">{item.occupation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
