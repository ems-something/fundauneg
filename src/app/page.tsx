"use client";
import React, { useState } from "react";

import HeroSection from "@/app/components/landing/hero-section";
import SearchSection from "@/app/components/landing/search-section";
import Content from "@/app/components/landing/content/content";
import AboutUs from "@/app/components/landing/about-us";
import Gallery from "@/app/components/landing/gallery";
import Testimonial from "@/app/components/landing/testimonial";
import OurTeam from "@/app/components/landing/our-team";
import Contact from "@/app/components/landing/contact/contact";
import HamburgerMenu from "@/app/components/landing/HamburgerMenu";
import { tabsData as tabs } from "@/app/data/tabsData";

export default function Home() {
	const [filteredTabs, setFilteredTabs] = useState(tabs);
	const [openHamburger, setOpenHamburger] = useState<boolean>(false);

	const handleClick = () => {
		setOpenHamburger(!openHamburger);
	};

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
							.toLowerCase(),
					),
			),
		}));
		console.log(newFilteredTabs);
		setFilteredTabs(newFilteredTabs);
	};

	return (
		<main>
			{openHamburger && (
				<HamburgerMenu open={openHamburger} setOpen={handleClick} />
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
