import React from "react";
import ContactForm from "./form";

function Contact() {
  return (
    <section
      id="contact_section"
      className="text-gray-400 bg-gray-900 body-font relative "
    >
      <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-5 p-4 flex items-end justify-start relative">
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
              <a className="text-secondary leading-relaxed">
                formacionfundauneg@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELÉFONO
              </h2>
              <p className="leading-relaxed">0286-9614121</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 mt-8 md:mt-0">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-white text-3xl mb-1 font-medium title-font">
              Contáctanos
            </h2>
            <p className="leading-relaxed">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
