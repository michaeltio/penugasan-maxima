import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";

const catamaran = Catamaran({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cat Facts",
  description: "Random Facts About Cat!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={catamaran.className}>{children}</body>
    </html>
  );
}
