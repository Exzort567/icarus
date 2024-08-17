"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background_beams";
import { Cover } from "../components/ui/cover";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import Icarus from "../public/team/icarus.png";

const people = [
  {
    id: 1,
    name: "Icarus",
    designation: "Founder",
    image: "/team/sad.jpg", // Use the correct path as a string
  },
  {
    id: 2,
    name: "Fred",
    designation: "Technical Analyst",
    image: "/team/sad.jpg",
  },
  {
    id: 3,
    name: "Jesucrypto",
    designation: "Harmonic Pattern",
    image: "/team/sad.jpg",
  },
  {
    id: 4,
    name: "Christop",
    designation: "Elliott Wave",
    image: "/team/sad.jpg",
  },
  {
    id: 5,
    name: "Jack of all waves",
    designation: "Elliott Wave",
    image: "/team/sad.jpg",
  },
  {
    id: 6,
    name: "Tom",
    designation: "Elliott Wave, AST",
    image: "/team/sad.jpg",
  },
  {
    id: 7,
    name: "CaHeart",
    designation: "Harmonic Pattern, AST",
    image: "/team/sad.jpg",
  },
];

export function HeroSection() {
  return (
    <div className="h-[55rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Icarus
        </h1>
        <p></p>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Hello, I'm Icarus. I make trading easier for <br /> at <Cover>Filipinos.</Cover>
        </h1>

        <p className="text-center">Meet the team:</p>
        
      </div>
      <BackgroundBeams />
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
        
    </div>
  );
}