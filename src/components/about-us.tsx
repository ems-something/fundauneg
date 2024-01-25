import React from "react";

const AboutUs = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 pt-24 sm:py-24 mx-auto">
        <div className="flex justify-center">
          <h2 className="sm:w-2/5 mb-12 text-3xl text-center text-white font-medium title-font">
            Nosotros
          </h2>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="sm:w-1/2 sm:h-96 h-80 w-80 sm:mr-10 inline-flex items-center justify-center shrink-0">
            <img
              alt="content"
              className="object-cover object-top h-full w-full rounded-lg"
              src="/images/IMG_Mision.jpg"
            />
          </div>
          <div className="grow sm:text-left mt-6 sm:mt-0">
            <h2 className="text-white text-center text-2xl title-font font-medium mb-8">
              Misión
            </h2>
            <p className="leading-relaxed text-base sm:text-justify text-center">
              En FUNDAUNEG, nos dedicamos a la promoción, desarrollo,
              consolidación y compromiso de la Universidad Nacional Experimental
              de Guayana. Ofrecemos servicios integrales de capacitación,
              formación, asistencia técnica y administración dirigidos a
              instituciones, asociaciones y la comunidad en general. Buscamos
              impulsar el desarrollo competitivo a través del mejoramiento
              continuo, estableciendo vínculos sólidos y colaborativos con
              diferentes sectores.
            </p>
          </div>
        </div>
        <div className="flex items-center mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col">
          <div className="grow sm:text-left mt-6 sm:mt-0">
            <h2 className="text-white text-center text-2xl title-font font-medium mb-8">
              Visión
            </h2>
            <p className="leading-relaxed text-base sm:text-justify text-center">
              Ser líderes destacados en la prestación de servicios de formación
              y capacitación respaldados por la Universidad Nacional
              Experimental de Guayana &quot;Manuel Carlos Piar&quot;
              (FUNDAUNEG), marcando la pauta a nivel regional, nacional e
              internacional. Aspiramos a ser reconocidos por nuestras políticas
              de calidad, oportunidad y competitividad, consolidando alianzas
              sólidas con el sector empresarial, profesores, estudiantes y la
              comunidad en general.
            </p>
          </div>
          <div className="sm:w-1/2 sm:h-96 h-80 w-80 order-first sm:order-none sm:ml-10 inline-flex items-center justify-center shrink-0">
            <img
              alt="content"
              className="object-cover object-top h-full w-full rounded-lg"
              src="/images/IMG_Vision.jpg"
            />
          </div>
        </div>
        <div className="flex items-center mx-auto sm:flex-row flex-col">
          <div className="sm:w-1/2 sm:h-96 h-80 w-80 sm:mr-10 inline-flex items-center justify-center shrink-0">
            <img
              alt="content"
              className="object-cover object-top h-full w-full rounded-lg"
              src="/images/IMG_Historia.jpg"
            />
          </div>
          <div className="grow sm:text-left mt-6 sm:mt-0">
            <h2 className="text-white text-center text-2xl title-font font-medium mb-8">
              Historia
            </h2>
            <p className="leading-relaxed text-base sm:text-justify text-center">
              Fundada en 1988, la Fundación de la Universidad Nacional
              Experimental de Guayana &quot;Manuel Carlos Piar&quot; (FUNDAUNEG)
              se ha destacado por su compromiso con el crecimiento de la UNEG a
              nivel regional, nacional e internacional. Establecemos conexiones
              significativas con el sector empresarial, profesores, estudiantes
              y la comunidad en general. Nuestros servicios abarcan la
              capacitación, formación, asistencia técnica y administración,
              contribuyendo al desarrollo sostenible y competitivo de quienes
              confían en nosotros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
