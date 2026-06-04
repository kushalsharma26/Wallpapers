"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import { wallpapers, Category } from "./data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredWallpapers =
    selectedCategory === "All"
      ? wallpapers
      : wallpapers.filter((w) => w.category === selectedCategory);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      {/* Spacer to overlap the hero slightly if desired, or just margin */}
      <div className="w-full -mt-6 z-20 relative">
        <Gallery wallpapers={filteredWallpapers} />
      </div>

      <footer className="w-full py-8 text-center text-zinc-300 border-t border-white/10 mt-auto">
        <p>Built with Next.js & Tailwind CSS. Images from Unsplash.</p>
        <p className="mt-2 text-white font-medium">created by kushal</p>
      </footer>
    </main>
  );
}
