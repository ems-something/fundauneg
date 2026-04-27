import React from "react";

import { ourTeamData as ourTeam } from "@/app/data/our-teamData";

function OurTeam() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="ourteam">
      <div className="container px-5 sm:py-16 mx-auto">
        <div className="flex justify-center text-center w-full mb-10">
          <h2 className="sm:w-2/5 mb-4 text-3xl text-center text-white font-medium title-font">
            Nuestro Equipo
          </h2>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {ourTeam.map((item, index) => (
            <div
              className="w-full sm:w-64 p-6 h-full flex flex-col items-center text-center"
              key={index}
            >
              <img
                alt="team"
                className="shrink-0 rounded-lg w-8/12 sm:w-56 object-cover object-center mb-4"
                src={item.imgUrl}
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  {item.name}
                </h2>
                <h3 className="text-gray-500 mb-3">{item.occupation}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
