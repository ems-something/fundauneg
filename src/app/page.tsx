import HeroSection from "@/components/hero-section";
import Search from "@/components/search";
import Content from "@/components/content";
import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Search />
      <Content />
      <AboutUs />
      <Testimonial />
      <Contact />
    </main>
  );
}
