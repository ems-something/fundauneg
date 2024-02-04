import HeroSection from "@/components/hero-section";
import SearchSection from "@/components/search-section";
import Content from "@/components/content/content";
import AboutUs from "@/components/about-us";
import Gallery from "@/components/gallery";
import Testimonial from "@/components/testimonial";
import OurTeam from "@/components/our-team";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SearchSection />
      <Content />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
