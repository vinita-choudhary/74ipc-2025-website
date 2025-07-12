import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import KeyFeatures from "@/components/sections/KeyFeatures";
import Speakers from "@/components/sections/Speakers";
import Schedule from "@/components/sections/Schedule";
import Registration from "@/components/sections/Registration";
import Sponsors from "@/components/sections/Sponsors";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to the 74th Indian Pharmaceutical Congress 2025 featuring AI & Technology in Pharma: Educate, Innovate, Empower. December 19-21, 2025, Bangalore.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <KeyFeatures />
      <Speakers />
      <Schedule />
      <Registration />
      <Sponsors />
      <Contact />
    </div>
  );
}
