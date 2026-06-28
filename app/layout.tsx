import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2a] text-white selection:bg-white/30 selection:text-white">
        <header className="flex flex-col items-center p-4 bg-[#1a1a2a]">
          <div className="site-logo w-16 h-16 rounded-full bg-white flex items-center justify-center text-black font-bold mb-2">B</div>
          <h1 className="text-3xl font-bold text-white mb-2">Beautify</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
