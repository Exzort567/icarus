"use client";
import { useEffect, useState } from "react";
import { Course } from "@/components/Course";
import { Discord } from "@/components/Discord";
import { HeroSection } from "@/components/HeroSection";
import { Partners } from "@/components/Partners";
import Loading from "../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay for demonstration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HeroSection />
          <Partners />
          <Course />
          <Discord />
        </>
      )}
    </>
  );
}
