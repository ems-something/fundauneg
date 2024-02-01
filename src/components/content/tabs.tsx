"use client";
import React, {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useState,
  useLayoutEffect,
  useRef,
} from "react";

interface TabsProps {
  tabs: Array<{ label: string; content: ReactNode }>;
}

const Tabs: FunctionComponent<TabsProps> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handlerTabsFunction = (
    e: MouseEvent<HTMLButtonElement>,
    tab: number
  ) => {
    e.preventDefault();
    setSelectedTab(tab);
  };

  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    firstBtnRef.current?.focus();
  }, []);

  return (
    <>
      <div className="sm:w-2/4 mx-auto">
        <div className="flex justify-center items-center sm:flex-row flex-col">
          {Array.isArray(tabs) &&
            tabs.map((tab, index) => (
              <button
                ref={index === 0 ? firstBtnRef : null}
                key={index}
                onClick={(e: MouseEvent<HTMLButtonElement>) =>
                  handlerTabsFunction(e, index)
                }
                className={`flex-1 sm:w-auto w-48 py-2 mb-12 text-3xl text-center font-medium title-font text-gray-500 ${
                  selectedTab === index
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
        {Array.isArray(tabs) &&
          tabs.map((tab, index) => (
            <div
              key={tab.label}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
      </div>
    </>
  );
};

export default Tabs;
