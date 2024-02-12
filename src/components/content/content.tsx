import React, { FunctionComponent } from "react";

import Tabs from "./tabs";

interface ContentProps {
  filter: string;
}

const tabs = [
  {
    label: "Diplomados",
    content: [
      {
        imgUrl: "/images/content/graduates/ecografia_abdominal.jpg",
        title: "Ecografía Abdominal",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/neurociencia_y_educacion.jpg",
        title: "Neurociencia y Educación",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/formacion_docente.jpg",
        title: "Formación Docente",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/atencion_al_cliente.jpg",
        title: "Atención al Cliente",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/programacion_web.jpg",
        title: "Programación Web",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/asesoria_familiar.jpg",
        title: "Asesoría Familiar",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/higienista_dental.jpg",
        title: "Higienista Dental",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/estetica_facial_y_corporal.jpg",
        title: "Estética Facial y Corporal",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/terapia_fisica_y_regeneradora.jpg",
        title: "Terapia Física y Regeneradora",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/graduates/dermocosmiatria_integral.jpg",
        title: "Dermocosmiatría Integral",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
    ],
  },
  {
    label: "Cursos",
    content: [
      {
        imgUrl: "/images/content/courses/asistente_administrativo.jpg",
        title: "Asistente Administrativo",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/courses/maquillaje.jpg",
        title: "Maquillaje",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/courses/matematicas_preuniversitarias.jpg",
        title: "Matemáticas Preuniversitarias",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/courses/ingles_basico.jpg",
        title: "Inglés Básico",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
    ],
  },
  {
    label: "Talleres",
    content: [
      {
        imgUrl: "/images/content/workshops/desarrollo_de_videojuegos.jpg",
        title: "Desarrollo de Videjuegos",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/workshops/orientacion_vocacional.jpg",
        title: "Orientación Vocacional",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
      {
        imgUrl: "/images/content/workshops/auto_maquillaje.jpg",
        title: "Auto Maquillaje",
        description:
          "Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.",
      },
    ],
  },
];

const Content: FunctionComponent<ContentProps> = ({ filter }) => {
  return (
    <section
      id="content_section"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 py-16 mx-auto">
        <Tabs tabs={tabs} filter={filter} />
      </div>
    </section>
  );
};

export default Content;
