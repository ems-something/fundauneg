import HeroSection from "@/components/hero-section";
import SearchBlock from "@/components/search-block";
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
      <SearchBlock />
      <Content />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <OurTeam />
      <Contact />
    </main>
  );
}
