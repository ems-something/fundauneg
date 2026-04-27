import React, { useState } from "react";
import Link from "next/link";

export interface HamburgerMenuState {
  open: boolean;
  setOpen: () => void;
  isHome?: boolean;
}

const HamburgerMenu: React.FC<HamburgerMenuState> = ({
  open,
  setOpen,
  isHome,
}) => {
  return (
    <div
      className={`sm:hidden fixed w-full h-full z-40 p-6 animate-fade-right ${
        !isHome ? "left-0" : ""
      } shadow bg-opacity-70 backdrop-blur-lg backdrop-filter`}
    >
      <button onClick={setOpen} className="w-full flex justify-end">
        <img src="/images/close.png" alt="" width={35} />
      </button>
      <ul className="flex flex-col gap-5">
        <Link
          onClick={setOpen}
          href="#offers"
          className="text-2xl font-rufina text-white w-full hover:bg-gray-950 p-5 rounded-xl"
        >
          Ofertas
        </Link>
        <Link
          onClick={setOpen}
          href="#about-us_section"
          className="text-2xl text-white font-rufina w-full hover:bg-gray-950 p-5 rounded-xl"
        >
          Nosotros
        </Link>
        <Link
          onClick={setOpen}
          href="#testimonials_section"
          className="text-2xl text-white font-rufina  w-full hover:bg-gray-950 p-5 rounded-xl"
        >
          Opiniones
        </Link>
        <Link
          onClick={setOpen}
          href="#contact_section"
          className="text-2xl text-white font-rufina w-full hover:bg-gray-950 p-5 rounded-xl"
        >
          Contacto
        </Link>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
