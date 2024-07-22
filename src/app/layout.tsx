import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./SideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daram Trinadh Reddy",
  description: "Daram Trinadh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='${inter.className} flex flex-col items-center md:flex-row md:items-center'>
        <div className="sidebar fixed top-0 left-0 w-auto">
        <SideBar/>
        </div>
        <div className="children">
        {children}
        </div>
        </body>
    </html>
  );
}
