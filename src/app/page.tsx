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
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Home() {
  const [filteredTabs, setFilteredTabs] = useState(tabs);
  const [openHamburger, setOpenHamburger] = useState<boolean>(false);

  const handleClick = () => {
    setOpenHamburger(!openHamburger)
  }

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
      {openHamburger && (
        <HamburgerMenu open={openHamburger} setOpen={handleClick}/>
      )}
      <HeroSection open={openHamburger} setOpen={handleClick} />
      <SearchSection onSearch={handleSearch} />
      <Content tabs={filteredTabs} /> <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
