import React, { FunctionComponent } from "react";

import Tabs from "./tabs";

type Tab = {
  label: string;
  content: {
    imgUrl: string;
    title: string;
    description: string;
    link: string;
  }[];
};

export type TabsArray = Tab[];

type ContentProps = {
  tabs: TabsArray;
};

const Content: FunctionComponent<ContentProps> = ({ tabs }) => {
  return (
    <section
      id="content_section"
      className="text-gray-400 bg-gray-900 body-font p-6"
    >
      <div className="container px-5 py-16 mx-auto">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
};

export default Content;
