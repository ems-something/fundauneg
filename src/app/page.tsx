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

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    // Here, you can access the search value when Enter is pressed
    console.log(value);
    setSearchValue(value);
  };

  return (
    <main>
      <HeroSection />
      <SearchSection onSearch={handleSearch} />
      <Content filter={searchValue} />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
