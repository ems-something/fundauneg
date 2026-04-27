"use client";
import React, {
  FunctionComponent,
  MouseEvent,
  useState,
  useLayoutEffect,
} from "react";

import { TabsArray } from "./content";

type TabsProps = {
  tabs: TabsArray;
};

const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState("");

  const handlerTabsFunction = (
    e: MouseEvent<HTMLButtonElement>,
    tab: string
  ) => {
    e.preventDefault();
    setSelectedTab(tab);
  };

  useLayoutEffect(() => {
    setSelectedTab("Diplomados");
  }, []);

  return (
    <>
      <div className="sm:w-4/5 mx-auto">
        <div className="flex justify-center mb-12 flex-row">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={(e: MouseEvent<HTMLButtonElement>) =>
                handlerTabsFunction(e, tab.label)
              }
              className={`flex-1 sm:w-auto w-48 py-2 sm:text-3xl text-xl text-center font-medium title-font text-gray-500 ${
                selectedTab === tab.label
                  ? "text-white border-b-4 border-primary"
                  : ""
              } `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-4">
        {tabs.map((tab) => (
          <div key={tab.label}>
            <div className="flex flex-wrap sm:-m-4  -mt-4">
              {selectedTab === tab.label &&
                tab.content.map((item, index) => (
                  <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div className="rounded-lg h-64 overflow-hidden hover:scale-110 hover:brightness-125">
                      <img
                        alt="content"
                        className="object-cover object-center h-full w-full"
                        src={item.imgUrl}
                      />
                    </div>
                    <h2 className="text-xl font-medium title-font text-white mt-5 text-center sm:text-left">
                      {item.title}
                    </h2>
                    <p className="text-base leading-relaxed mt-2  text-justify sm:text-left">
                      {item.description}
                    </p>
                    <a
                      className="text-secondary mt-3 flex justify-center items-center sm:justify-start"
                      href={item.link}
                      target="_blank"
                    >
                      Descargar Información
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
