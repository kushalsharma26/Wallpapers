export type Category = "All" | "Cars" | "Landscapes";

export interface Wallpaper {
  id: string;
  url: string;
  title: string;
  category: "Cars" | "Landscapes";
  author: string;
}

export const wallpapers: Wallpaper[] = [
  // Cars
  {
    id: "c1",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2666&auto=format&fit=crop",
    title: "Classic Porsche",
    category: "Cars",
    author: "Peter Broomfield",
  },
  {
    id: "c2",
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2764&auto=format&fit=crop",
    title: "Mercedes AMG",
    category: "Cars",
    author: "Martin Katler",
  },
  {
    id: "c3",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2574&auto=format&fit=crop",
    title: "Neon Mustang",
    category: "Cars",
    author: "Serge Kutuzov",
  },
  {
    id: "c4",
    url: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2787&auto=format&fit=crop",
    title: "Ferrari 458",
    category: "Cars",
    author: "Olly",
  },
  {
    id: "c5",
    url: "https://images.unsplash.com/photo-1503376985449-74d1a525d81a?q=80&w=2717&auto=format&fit=crop",
    title: "Nissan GT-R",
    category: "Cars",
    author: "Yannis Zaugg",
  },

  // Landscapes
  {
    id: "l1",
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2938&auto=format&fit=crop",
    title: "Mountain Path",
    category: "Landscapes",
    author: "David Marcu",
  },
  {
    id: "l2",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2940&auto=format&fit=crop",
    title: "Serene Lake",
    category: "Landscapes",
    author: "Pietro De Grandi",
  },
  {
    id: "l3",
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2787&auto=format&fit=crop",
    title: "Forest Bridge",
    category: "Landscapes",
    author: "Luca Bravo",
  },
  {
    id: "l4",
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2940&auto=format&fit=crop",
    title: "Sunset Hills",
    category: "Landscapes",
    author: "Daniel Leone",
  },
  {
    id: "l5",
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2940&auto=format&fit=crop",
    title: "Rocky Peaks",
    category: "Landscapes",
    author: "Kalen Emsley",
  },
  {
    id: "l6",
    url: "https://images.unsplash.com/photo-1506744626753-143b66565c11?q=80&w=2800&auto=format&fit=crop",
    title: "River Valley",
    category: "Landscapes",
    author: "Ken Cheung",
  },
];
