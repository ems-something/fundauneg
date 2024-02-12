"use client";
import React, { FunctionComponent, ChangeEvent, useState } from "react";

export type SearchProps = {
  onSearch: (value: string) => void;
};

const SearchSection: FunctionComponent<SearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("Buscar...");

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setSearchValue(target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Here, we call the onSearch function and pass the value
      onSearch(searchValue);
    }
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col items-center justify-between">
          <h2 className="sm:w-2/5 text-3xl text-center text-white mb-12 font-medium title-font">
            Oferta Académica Actual
          </h2>
          <p className="leading-relaxed text-base sm:text-justify text-center  mb-10">
            En Postgrado FUNDAUNEG ofrecemos programas que responden a los retos
            y necesidades de la sociedad, en las áreas de Ciencias Sociales,
            Económicas, Derecho, Humanidades, Educación e Ingeniería. Juntos
            construimos el futuro.
          </p>
          <div className="relative w-full text-gray-600">
            <input
              type="search"
              name="search"
              placeholder={searchValue}
              className="bg-white h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
              onChange={(event) => searchHandler(event)}
              onKeyDown={handleKeyDown}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
