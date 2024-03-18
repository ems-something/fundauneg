import React from "react";

import { galleryData as gallery } from "@/app/data/galleryData";

function Gallery() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex justify-center text-center w-full mb-20">
          <h2 className="sm:w-2/5 mb-4 text-3xl text-white font-medium title-font">
            Galeria
          </h2>
        </div>
        <div className="container mx-auto p-4 grid lg:grid-cols-3 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 transform duration-500">
          {gallery.map((item, index) => (
            <div
              className="max-w-sm transform hover:-translate-y-1 duration-300 mx-3"
              key={index}
            >
              <div className="h-full relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                  src={item.imgUrl}
                />
                <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                  <h3 className="tracking-widest text-sm title-font font-medium text-secondary mb-1">
                    {item.title}
                  </h3>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.subtitle}
                  </h1>
                  <p className="leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
