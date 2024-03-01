import React from "react";

import { ourTeamData as ourTeam } from "@/app/data/our-teamData";

function OurTeam() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
          <h2 className="sm:w-2/5 mb-4 text-3xl text-center text-white font-medium title-font">
            Nuestro Equipo
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            havent heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {ourTeam.map((item, index) => (
            <div className="p-4 lg:w-1/4 md:w-1/2" key={index}>
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-white">
                    {item.name}
                  </h2>
                  <h3 className="text-gray-500 mb-3">{item.occupation}</h3>
                  <p className="mb-4">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
