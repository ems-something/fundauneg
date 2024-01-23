import React from "react";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/50"
      style={{ backgroundImage: `url(/images/IMG_20220718_165541_554.jpg)` }}
    >
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col mix-blend-overlay">
        <img
          className="lg:w-1/5 md:w-2/5 w-3/5 mb-10"
          alt="fundauneg logo"
          src="/images/fundaUneg-logo.png"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="sm:text-8xl text-6xl mb-5 title-font font-black">
            FUNDAUNEG
          </h1>
          <p className="font-light leading-relaxed text-3xl ">
            Formación y capacitación con respaldo universitario
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
