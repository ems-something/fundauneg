import HeroSection from "@/components/hero-section";
import Search from "@/components/search";
import Content from "@/components/content";
import AboutUs from "@/components/about-us";
import Gallery from "@/components/gallery";
import Testimonial from "@/components/testimonial";
import OurTeam from "@/components/our-team";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Search />
      <Content />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
