"use client";
import React, { useState } from "react";

import HeroSection from "@/components/hero-section";
import SearchSection from "@/components/search-section";
import Content from "@/components/content/content";
import AboutUs from "@/components/about-us";
import Gallery from "@/components/gallery";
import Testimonial from "@/components/testimonial";
import OurTeam from "@/components/our-team";
import Contact from "@/components/contact/contact";

import { tabsData as tabs } from "@/app/data/tabsData";

export default function Home() {
  const [filteredTabs, setFilteredTabs] = useState(tabs);

  const handleSearch = (value: string) => {
    const newFilteredTabs = tabs.map((tab) => ({
      ...tab,
      content: tab.content.filter(({ title }) =>
        title
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
          .includes(
            value
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
          )
      ),
    }));
    console.log(newFilteredTabs);
    setFilteredTabs(newFilteredTabs);
  };

  return (
    <main>
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      <Content tabs={filteredTabs} /> <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
