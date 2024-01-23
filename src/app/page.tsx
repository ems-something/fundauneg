import HeroSection from "@/components/hero-section";
import Search from "@/components/search";
import Content from "@/components/content";
import Feature from "@/components/feature";
import Contact from "@/components/contact";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Search />
      <Content />
      <Feature />
      <Testimonial />
      <Contact />
    </main>
  );
}
