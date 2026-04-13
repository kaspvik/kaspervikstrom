import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Footer from "@/components/Footer";
import ScrollFAB from "@/components/ScrollFAB/ScrollFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <HowIWork />
        <About />
      </main>
      <Footer />
      <ScrollFAB />
    </>
  );
}
