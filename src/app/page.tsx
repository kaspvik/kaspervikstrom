import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import SelectedWork from "@/components/SelectedWork/SelectedWork";
import HowIWork from "@/components/HowIWork/HowIWork";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";

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
    </>
  );
}
