import { Course } from "@/components/Course";
import { Discord } from "@/components/Discord";
import { HeroSection } from "@/components/HeroSection";
import { Partners } from "@/components/Partners";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Partners/>
      <Course/>
      <Discord/>
    </>
   
  );
}
