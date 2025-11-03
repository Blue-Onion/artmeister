import type { Metadata } from "next";
import { Archivo_Black,Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "Artmeister",
  description: "Art club-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack} antialiased`}
      >
        <main className="mx-auto container ">

        {children}
        </main>
      </body>
    </html>
  );
}
