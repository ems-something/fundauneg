import React from "react";

export interface HeroSectionProps {
  open: boolean;
  setOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ open, setOpen }) => {
  return (
    <section
      className="h-screen w-full text-white bg-top bg-cover bg-blend-overlay bg-fixed bg-black/50 flex flex-col justify-between items-center"
      style={{ backgroundImage: `url(/images/hero-section/hero-section.jpg)` }}
    >
      <button className="ml-4 mt-4 md:hidden" onClick={setOpen}>
        <img src="/images/menu.png" alt="" width={30} />
      </button>
      <div className="container h-screen p-6 flex flex-col justify-center items-center sm:p-32  mix-blend-overlay">
        <img
          className="lg:w-1/5 md:w-1/3 w-64 mb-10"
          alt="fundauneg logo"
          src="/images/hero-section/fundaUneg-logo.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="text-5xl sm:text-7xl  mb-5 title-font font-black">
            FUNDAUNEG
          </h1>
          <p className="font-light leading-relaxed sm:text-3xl text-xl">
            Formación y capacitación con respaldo universitario
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
