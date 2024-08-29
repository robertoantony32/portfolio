"use client";

import Image from "next/image";
import { Header } from "../components/Header";
import { useRef } from "react";
import { Hero } from "../components/Hero";
import { Projects } from "@/components/About";

export default function Home() {

  return (
    <div className="min-w-full min-h-screen bg-black p-8 flex flex-col lg:flex-row">
        <Header />
      <main className="size-full">
        <Hero />
        <Projects />
      </main>
    </div>
  );
}
