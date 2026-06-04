"use client";

import Image from "next/image";
import { Category } from "../data";

interface HeroProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

export default function Hero({ selectedCategory, onSelectCategory }: HeroProps) {
  const categories: Category[] = ["All", "Cars", "Landscapes"];

  return (
    <section className="relative w-full h-[45vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background with abstract gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <Image
          src="/eagle.png"
          alt="Eagle Logo"
          width={80}
          height={80}
          className="mb-4 drop-shadow-xl"
        />
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg italic text-[#4A1F7F]">
          Beautify
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10">
          Discover a curated collection of high-resolution cars and landscapes to elevate your screen.
        </p>

        {/* Glassmorphic category filter */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-black shadow-lg"
                  : "text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
