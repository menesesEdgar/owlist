import NavBar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owlist App",
  description: "Activities management for any organization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full">
          <div className={cn("h-[80px] fixed inset-y-0 w-full")}>
            <NavBar />
          </div>
          {/* This component is to display the content of all the site */}
          <main className={cn(" pt-[80px] h-[100vh]")}>{children}</main>
        </div>
      </body>
    </html>
  );
}
