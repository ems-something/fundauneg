"use client";
import React from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`hidden sm:block w-full sm:h-20 h-32 fixed top-0 z-50 transition-shadow ${scrollPosition > 0
        ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
        : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mix-blend-overlay">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <img
            className="h-10 w-10"
            src="/images/fundaUneg-logo.svg"
            alt="uneg logotipo"
          />
          <span className="text-white ml-3 text-xl">Fundauneg</span>
        </a>
        <nav className="text-gray-400 md:ml-auto flex flex-wrap items-center text-base justify-center">
          <li className="list-none p-2 hover:bg-gray-950 rounded-full">
            <a href="#content_section" className="mr-5 text-white ml-4">
              Ofertas
            </a>
          </li>
          <li className="list-none p-2 hover:bg-gray-950 rounded-full">
            <a href="#about-us_section" className="mr-5 text-white ml-4">
              Nosotros
            </a>
          </li>
          <li className="list-none p-2 hover:bg-gray-950 rounded-full">
            <a href="#testimonials_section" className="mr-5 text-white ml-4">
              Opiniones
            </a>
          </li>
          <li className="list-none p-2 hover:bg-gray-950 rounded-full">
            <a href="#contact_section" className="mr-5 text-white ml-4">
              Contacto
            </a>
          </li>

        </nav>
      </div>
    </header>
  );
};

export default Header;