import NavBar from "@/components/Navbar/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

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
          <div className="h-[80px]  fixed inset-y-0 w-full">
            <NavBar />
          </div>
          {/* <div className="fixed pt-[56px] h-[100vh]"> */}
          {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50"> */}
          {/* </div> */}
          {/* </div> */}
          {/* This component is to display the content of all the site */}
          {/* <main className="fixed right-0 top-16  w-5/6 h-[100vh] bg-slate-100 m-2 rounded-md"> */}
          <div className="flex flex-row justify-between w-full mt-16">
            <Sidebar />
            <main className="left-56 top-16  w-full bg-accent-foreground h-[calc(100vh-5rem)] rounded-md m-2">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
