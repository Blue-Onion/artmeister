import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});


export const metadata: Metadata = {
  title: {
    default: "Artmeister | Art & Cocktails",
    template: "%s | Artmeister",
  },
  description: "Join Artmeister, the exclusive art and cocktail club. Experience curated art exhibitions and signature cocktails in a modern, vibrant atmosphere.",
  keywords: ["art club", "cocktail bar", "art gallery", "modern art", "nightlife", "drinks", "social club"],
  authors: [{ name: "Artmeister Team" }],
  creator: "Artmeister",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Artmeister | Art & Cocktails",
    description: "Experience the finest art and cocktails at Artmeister.",
    url: "https://artmeister.com",
    siteName: "Artmeister",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Artmeister Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artmeister | Art & Cocktails",
    description: "Join Artmeister, the exclusive art and cocktail club.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${inter.variable} antialiased`}
      >
        <main className="mx-auto bg-white container">

        {children}
        </main>
      </body>
    </html>
  );
}
