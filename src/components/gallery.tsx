import React from "react";

const galleryData = [
  {
    imgUrl: "/images/gallery/dermocosmiatria_integral.jpg",
    title: "Diplomado en Dermocosmiatría Integral",
    subtitle: "Shooting Stars",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgUrl: "/images/gallery/higienista_dental.jpg",
    title: "Diplomado en Higienista Dental",
    subtitle: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgUrl: "/images/gallery/conversatorio.jpg",
    title: "Conversatorio",
    subtitle: "The 400 Blows",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgUrl: "/images/gallery/ecografia_abdominal.jpg",
    title: "Diplomado en Ecografía Abdominal",
    subtitle: "Alper Kamu",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgUrl: "/images/gallery/atencion_al_publico.jpg",
    title: "Diplomado en Atención al Público",
    subtitle: "Neptune",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
  {
    imgUrl: "/images/gallery/formacion_docente.jpg",
    title: "Diplomado en Formación Docente",
    subtitle: "Holden Caulfield",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
  },
];

function Gallery() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto">
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
        <div className="container mx-auto p-10 grid lg:grid-cols-3 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-10 transform duration-500">
          {galleryData.map((item, index) => (
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
                  <h3 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
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
