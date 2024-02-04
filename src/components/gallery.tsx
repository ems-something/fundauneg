import React from "react";

function Gallery() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
          <h2 className="sm:w-2/5 mb-4 text-3xl text-white font-medium title-font">
            Galeria
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 h-96 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/images/gallery/dermocosmiatria_integral.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                <h3 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  Diplomado en Dermocosmiatría Integral
                </h3>
                <h4 className="title-font text-lg font-medium text-white mb-3">
                  Shooting Stars
                </h4>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/images/gallery/higienista_dental.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                <h3 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  Diplomado en Higienista Dental
                </h3>
                <h4 className="title-font text-lg font-medium text-white mb-3">
                  The Catalyzer
                </h4>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 object-cover object-center w-full h-full rounded-lg"
                src="/images/gallery/conversatorio.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                <h3 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  Conversatorio
                </h3>
                <h4 className="title-font text-lg font-medium text-white mb-3">
                  The 400 Blows
                </h4>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0  object-cover object-center w-full h-full rounded-lg"
                src="/images/gallery/ecografia_abdominal.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                <h3 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  Diplomado en Ecografía Abdominal
                </h3>
                <h4 className="title-font text-lg font-medium text-white mb-3">
                  Alper Kamu
                </h4>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0  object-cover object-center w-full h-full rounded-lg"
                src="/images/gallery/atencion_al_publico.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                <h3 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  Diplomado en Atención al Público
                </h3>
                <h4 className="title-font text-lg font-medium text-white mb-3">
                  Neptune
                </h4>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0  object-cover object-center w-full h-full rounded-lg"
                src="/images/gallery/formacion_docente.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full rounded-lg border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-80">
                <h3 className="tracking-widest text-sm title-font font-medium text-primary mb-1">
                  Diplomado en Formación Docente
                </h3>
                <h4 className="title-font text-lg font-medium text-white mb-3">
                  Holden Caulfield
                </h4>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
