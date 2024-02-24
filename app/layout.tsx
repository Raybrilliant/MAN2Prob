import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100",'200','300','400','500','600','700','800','900']
})

export const metadata: Metadata = {
  title: "MAN 2 Kota Probolinggo",
  description: "Just Project for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} px-4 my-4 font-medium scroll-smooth`}>{children}</body>
    </html>
  );
}
