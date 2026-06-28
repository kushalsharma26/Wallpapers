"use client";

import Image from "next/image";
import { Wallpaper } from "../data";

interface GalleryProps {
  wallpapers: Wallpaper[];
}

export default function Gallery({ wallpapers }: GalleryProps) {
  if (wallpapers.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-zinc-500">
        No wallpapers found for this category.
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 pb-24">
      {/* Tailwind CSS Column Layout for Masonry Effect */}
      <div className="gallery-grid">
        {wallpapers.map((wallpaper) => (
          <div
            key={wallpaper.id}
            className="relative group break-inside-avoid overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 cursor-pointer"
          >
            {/* Image */}
            <div className="relative w-full aspect-auto h-auto min-h-[250px]">
              <Image
                src={wallpaper.url}
                alt={wallpaper.title}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                unoptimized // Using unoptimized for external unsplash images to prevent vercel image optimization limits on dev
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {wallpaper.title}
              </h3>
              <p className="text-zinc-300 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                by {wallpaper.author}
              </p>
              <div className="mt-4 flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-md rounded-full text-white border border-white/10">
                  {wallpaper.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
