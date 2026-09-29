import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Interlude } from "@/components/sections/interlude";
import { Toolkit } from "@/components/sections/toolkit";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Interlude />
      <Toolkit />
      <Contact />
    </>
  );
}
