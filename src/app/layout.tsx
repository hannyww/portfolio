import type { Metadata } from "next";
import { spaceGrotesk, plusJakarta, outfit } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-neutral-900 min-h-screen selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
