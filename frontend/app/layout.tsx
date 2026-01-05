import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const merriweather = Merriweather({ 
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"], 
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: "GentleCars – Premium Sportwagenvermietung",
  description: "Erleben Sie Luxus und Performance mit unserer exklusiven Auswahl an Premium-Sportwagen. Mercedes-AMG, Porsche, BMW und mehr.",
  keywords: ["Sportwagen", "Autovermietung", "Luxusautos", "Premium", "Mercedes", "Porsche", "BMW"],
  openGraph: {
    title: "GentleCars – Premium Sportwagenvermietung",
    description: "Erleben Sie Luxus und Performance mit unserer exklusiven Auswahl an Premium-Sportwagen.",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
