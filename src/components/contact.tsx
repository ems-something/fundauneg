import React from "react";

function Contact() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.1039180757125!2d-62.736085125323605!3d8.292456400083871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf9b6f5144e5f%3A0x9aba1970ed298e6a!2sFUNDAUNEG.%20Fundaci%C3%B3n%20Manuel%20Carlos%20Piar.!5e0!3m2!1ses!2sve!4v1706134296867!5m2!1ses!2sve"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Torre Alférez, Nivel Mezzanina, Oficina 3-A.
                <br /> Fundauneg. Alta Vista. Puerto Ordaz.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO
              </h2>
              <a className="text-primary leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELÉFONO
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 mt-8 md:mt-0">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-white text-lg mb-1 font-medium title-font">
              Contáctanos
            </h2>
            <p className="leading-relaxed">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="relative pr-2 mb-4 w-1/2">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 w-1/2">
              <label
                htmlFor="lastname"
                className="leading-7 text-sm text-gray-400"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Apellido"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Teléfono"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 w-full">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-primary focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <button className="w-full text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
              Enviar
            </button>
            <p className="text-xs text-gray-400 text-opacity-90 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
