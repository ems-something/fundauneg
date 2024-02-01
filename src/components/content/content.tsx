"use client";
import React, { MouseEvent, useState } from "react";
import Tabs from "./tabs";

const tabs = [
  {
    label: "Cursos",
    content: (
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/courses/asistente_administrativo.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Asistente Administrativo
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/courses/maquillaje.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Maquillaje
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindegoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/courses/matematicas_preuniversitarias.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Matemáticas Preuniversitarias
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindegoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/courses/ingles_basico.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Inglés Básico
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    ),
  },
  {
    label: "Talleres",
    content: (
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/workshops/desarrollo_de_videojuegos.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Desarrollo de Videjuegos
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/workshops/orientacion_vocacional.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Orientación Vocacional
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/workshops/auto_maquillaje.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Auto Maquillaje
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    ),
  },
  {
    label: "Diplomados",
    content: (
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/ecografia_abdominal.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Ecografía Abdominal
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindegoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/neurociencia_y_educacion.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Neurociencia y Educación
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/formacion_docente.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Formación Docente
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/atencion_al_cliente.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Atención al Cliente
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/programacion_web.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Programación Web
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/asesoria_familiar.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Asesoría Familiar
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/higienista_dental.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Higienista Dental
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindxgoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/estetica_facial_y_corporal.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Estética Facial y Corporal
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindegoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/terapia_fisica_y_regeneradora.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Terapia Física y Regeneradora
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindegoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="/images/content/graduates/dermocosmiatria_integral.jpg"
            />
          </div>
          <h2 className="text-xl font-medium title-font text-white mt-5">
            Dermocosmiatría Integral
          </h2>
          <p className="text-base leading-relaxed mt-2">
            Swag shoindegoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard dreamcatcher neutra,
            ethical XOXO lumbersexual.
          </p>
          <a className="text-primary inline-flex items-center mt-3">
            Ver más
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    ),
  },
];

const Content = () => {
  return (
    <section
      id="content_section"
      className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container px-5 pt-24 sm:py-24 mx-auto">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default Content;
