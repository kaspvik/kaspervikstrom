import { LanguageProvider } from "@/context/LanguageContext";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasper Vikström — Frontend Developer",
  description:
    "Frontend developer focused on modern UI, accessibility, and thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
