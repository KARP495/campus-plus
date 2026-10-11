import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/inter";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Campus+ — Ton parcours universitaire, plus simple",
  description: "Information universitaire, entraide, services étudiants et stages réunis dans un même espace.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0A66F5" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
