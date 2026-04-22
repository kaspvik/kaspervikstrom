import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Navbar from "@/components/Navbar";
import ScrollFAB from "@/components/ScrollFAB/ScrollFAB";
import SelectedWork from "@/components/SelectedWork";

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
