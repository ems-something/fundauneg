"use client";
import React from "react";

import { useScrollPosition } from "@/hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`w-full h-20 fixed top-0 z-50 transition-shadow ${
        scrollPosition > 0
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
          <a className="mr-5 hover:text-white">First Link</a>
          <a className="mr-5 hover:text-white">Second Link</a>
          <a className="mr-5 hover:text-white">Third Link</a>
          <a className="mr-5 hover:text-white">Fourth Link</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
